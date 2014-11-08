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

  constructor: ->
    @parser     = new expat.Parser('UTF-8')
    @entries    = []
    @stack      = []
    @curr_tag   = undefined
    @curr_text  = ''
    @curr_entry = undefined
    @unique_paths = []
    @end_reached  = false

    @parser.on('startElement', (name, attrs) =>
      @stack.push(name)
      @curr_tag  = name
      @curr_text = ''
      cp = this.curr_path()
      @unique_paths.push(cp)
      for n,v of attrs
        @unique_paths.push(cp + '@' + n))

    @parser.on('endElement', (name) =>
      @stack.pop()
      @curr_tag  = undefined
      @curr_text = ''
      if name == @stack[0]
        @end_reached = true

      p = 'xxx'

      switch p
        when "Activities"
          x = 0
        when "Activities|Activity"
          x = 0
        when "Activities|Activity@Sport"
          x = 0
        when "Activities|Activity|Creator"
          x = 0
        when "Activities|Activity|Creator@xsi:type"
          x = 0
        when "Activities|Activity|Creator|Name"
          x = 0
        when "Activities|Activity|Creator|ProductID"
          x = 0
        when "Activities|Activity|Creator|UnitId"
          x = 0
        when "Activities|Activity|Creator|Version"
          x = 0
        when "Activities|Activity|Creator|Version|BuildMajor"
          x = 0
        when "Activities|Activity|Creator|Version|BuildMinor"
          x = 0
        when "Activities|Activity|Creator|Version|VersionMajor"
          x = 0
        when "Activities|Activity|Creator|Version|VersionMinor"
          x = 0
        when "Activities|Activity|Id"
          x = 0
        when "Activities|Activity|Lap"
          x = 0
        when "Activities|Activity|Lap@StartTime"
          x = 0
        when "Activities|Activity|Lap|AverageHeartRateBpm"
          x = 0
        when "Activities|Activity|Lap|AverageHeartRateBpm|Value"
          x = 0
        when "Activities|Activity|Lap|Calories"
          x = 0
        when "Activities|Activity|Lap|DistanceMeters"
          x = 0
        when "Activities|Activity|Lap|Extensions"
          x = 0
        when "Activities|Activity|Lap|Extensions|LX"
          x = 0
        when "Activities|Activity|Lap|Extensions|LX@xmlns"
          x = 0
        when "Activities|Activity|Lap|Extensions|LX|AvgRunCadence"
          x = 0
        when "Activities|Activity|Lap|Extensions|LX|AvgSpeed"
          x = 0
        when "Activities|Activity|Lap|Extensions|LX|MaxRunCadence"
          x = 0
        when "Activities|Activity|Lap|Extensions|LX|Steps"
          x = 0
        when "Activities|Activity|Lap|Intensity"
          x = 0
        when "Activities|Activity|Lap|MaximumHeartRateBpm"
          x = 0
        when "Activities|Activity|Lap|MaximumHeartRateBpm|Value"
          x = 0
        when "Activities|Activity|Lap|MaximumSpeed"
          x = 0
        when "Activities|Activity|Lap|TotalTimeSeconds"
          x = 0
        when "Activities|Activity|Lap|Track"
          x = 0
        when "Activities|Activity|Lap|Track|Trackpoint"
          x = 0
        when "Activities|Activity|Lap|Track|Trackpoint|AltitudeMeters"
          x = 0
        when "Activities|Activity|Lap|Track|Trackpoint|DistanceMeters"
          x = 0
        when "Activities|Activity|Lap|Track|Trackpoint|Extensions"
          x = 0
        when "Activities|Activity|Lap|Track|Trackpoint|Extensions|TPX"
          x = 0
        when "Activities|Activity|Lap|Track|Trackpoint|Extensions|TPX@xmlns"
          x = 0
        when "Activities|Activity|Lap|Track|Trackpoint|Extensions|TPX|RunCadence"
          x = 0
        when "Activities|Activity|Lap|Track|Trackpoint|Extensions|TPX|Speed"
          x = 0
        when "Activities|Activity|Lap|Track|Trackpoint|HeartRateBpm"
          x = 0
        when "Activities|Activity|Lap|Track|Trackpoint|HeartRateBpm|Value"
          x = 0
        when "Activities|Activity|Lap|Track|Trackpoint|Position"
          x = 0
        when "Activities|Activity|Lap|Track|Trackpoint|Position|LatitudeDegrees"
          x = 0
        when "Activities|Activity|Lap|Track|Trackpoint|Position|LongitudeDegrees"
          x = 0
        when "Activities|Activity|Lap|Track|Trackpoint|Time"
          x = 0
        when "Activities|Activity|Lap|TriggerMethod"
          x = 0
        when "Author"
          x = 0
        when "Author|Build"
          x = 0
        when "Author|Build|Version"
          x = 0
        when "Author|Build|Version|BuildMajor"
          x = 0
        when "Author|Build|Version|BuildMinor"
          x = 0
        when "Author|Build|Version|VersionMajor"
          x = 0
        when "Author|Build|Version|VersionMinor"
          x = 0
        when "Author|LangID"
          x = 0
        when "Author|Name"
          x = 0
        when "Author|PartNumber"
          x = 0
    )

    @parser.on('text', (text) =>
      @curr_text = @curr_text + text)

    @parser.on('error', (error) =>
      console.log('error ' + JSON.stringify(error)))

  parse_file: (filename) =>
    xml_str = fs.readFileSync(filename)
    @parser.parse(xml_str)

  curr_path: ->
    @stack.slice(1).join('|')

  curr_full_path: ->
    @stack.join('|')

  curr_depth: ->
    @stack.length

  log_unique_paths: ->
    sorted = @unique_paths.slice(0).sort()
    prev = ''
    for path in sorted
      if path != prev
        prev = path
        console.log('unique_path: ' + path)

root.Parser = Parser
