###
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
###

expat = require('node-expat')
fs    = require('fs')

root = exports ? this

class Entry

  constructor: (tag, path, attrs) ->
    this.add_value('type', attrs.type)
    this.add_value('path', path)
    for n,v of attrs
      this[n] = v

class Parser

  @VERSION: '0.0.1'

  constructor: (verbose=false) ->
    @verbose     = verbose
    @parser      = new expat.Parser('UTF-8')
    @tag_stack   = []
    @paths       = []
    @end_reached = false
    @curr_tag    = undefined
    @curr_text   = ''
    @curr_tkpt   = undefined

    # @activity contains the parsed data:
    @activity = {}
    @activity.creator = {}
    @activity.author  = {}
    @activity.trackpoints = []

    @parser.on('startElement', (name, attrs) =>
      @tag_stack.push(name)
      @curr_tag  = name
      @curr_text = ''
      p = this.curr_path()

      # this logic is for capturing/exploring the structure of the tcx/xml document
      @paths.push(p)
      for n,v of attrs
        @paths.push(p + '@' + n)

      switch p
        when "Activities|Activity|Lap|Track|Trackpoint"
          @curr_tkpt = {}
          @activity.trackpoints.push(@curr_tkpt)
    )

    @parser.on('endElement', (name) =>
      p = this.curr_path()
      console.log('end: ' + p + " -> " + @curr_text) if @verbose
      switch p
        # Activity info
        when "Activities|Activity|Creator|Name"
          @activity.creator.name = @curr_text
        when "Activities|Activity|Creator|ProductID"
          @activity.creator.product_id = @curr_text
        when "Activities|Activity|Creator|UnitId"
          @activity.creator.unit_id = @curr_text
        when "Activities|Activity|Creator|Version|BuildMajor"
          @activity.creator.build_major = @curr_text
        when "Activities|Activity|Creator|Version|BuildMinor"
          @activity.creator.build_minor = @curr_text
        when "Activities|Activity|Creator|Version|VersionMajor"
          @activity.creator.version_major = @curr_text
        when "Activities|Activity|Creator|Version|VersionMinor"
          @activity.creator.version_minor = @curr_text
        when "Activities|Activity|Id"
          @activity.id = @curr_text

        # Trackpoints
        when "Activities|Activity|Lap|Track|Trackpoint|AltitudeMeters"
          @curr_tkpt.alt_meters = @curr_text
        when "Activities|Activity|Lap|Track|Trackpoint|DistanceMeters"
          @curr_tkpt.dist_meters = @curr_text
        when "Activities|Activity|Lap|Track|Trackpoint|Extensions|TPX|RunCadence"
          @curr_tkpt.run_cadence = @curr_text
        when "Activities|Activity|Lap|Track|Trackpoint|HeartRateBpm|Value"
          @curr_tkpt.hr_bpm = @curr_text
        when "Activities|Activity|Lap|Track|Trackpoint|Position|LatitudeDegrees"
          @curr_tkpt.lat = @curr_text
        when "Activities|Activity|Lap|Track|Trackpoint|Position|LongitudeDegrees"
          @curr_tkpt.lng = @curr_text
        when "Activities|Activity|Lap|Track|Trackpoint|Time"
          @curr_tkpt.time = @curr_text
        when "Activities|Activity|Lap|TriggerMethod"
          x = 0

        # Author info
        when "Author|Build|Version|BuildMajor"
          @activity.author.build_major = @curr_text
        when "Author|Build|Version|BuildMinor"
          @activity.author.build_minor = @curr_text
        when "Author|Build|Version|VersionMajor"
          @activity.author.version_major = @curr_text
        when "Author|Build|Version|VersionMinor"
          @activity.author.version_minor = @curr_text
        when "Author|LangID"
          @activity.author.lang = @curr_text
        when "Author|Name"
          @activity.author.name = @curr_text
        when "Author|PartNumber"
          @activity.author.part_number = @curr_text

      @tag_stack.pop()
      @curr_tag  = undefined
      @curr_text = ''
      if name == @tag_stack[0]
        @end_reached = true
    )

    @parser.on('text', (text) =>
      @curr_text = @curr_text + text)

    @parser.on('error', (error) =>
      console.log('error ' + JSON.stringify(error)))

  parse_file: (filename) =>
    xml_str = fs.readFileSync(filename)
    @parser.parse(xml_str)

  curr_path: ->
    @tag_stack.slice(1).join('|')

  curr_full_path: ->
    @tag_stack.join('|')

  curr_depth: ->
    @tag_stack.length

  log_unique_paths: ->
    sorted = @paths.slice(0).sort()
    prev = ''
    for path in sorted
      if path != prev
        prev = path
        console.log('unique_path: ' + path)

root.Parser = Parser
