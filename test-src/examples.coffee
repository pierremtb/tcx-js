###
This purpose of this file is to test the generated tcx.js file, outside of jasmine,
before deployment to npm.  It (accurately) generates Examples section of the README.md
file based on actual working code and output.
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
###

fs  = require('fs')
tcx = require("./lib/tcx.js")

console.log('')
console.log('### Examples')
console.log('')
console.log('#### Setup')
console.log('')
console.log('Add tcx-js to your project or package.json file:')
console.log('```')
console.log('npm install tcx-js')
console.log('```')
console.log('')
console.log('Require tcx-js in your code:')
console.log('```')
console.log('tcx = require("tcx-js")')
console.log('```')
console.log('')

console.log('#### Parse a TCX file from Garmin Connect')
console.log('')
console.log('Parsing elapsed time is typically sub-second, even for a marathon run.')
console.log("The tcx-js Parser uses the 'node-expat' library, and the SAX API, for speed and performance.")
console.log('')
console.log('Note: this library is implemented with CoffeeScript, and these examples are also in CoffeeScript.')
console.log('')
console.log('```')
parser = new tcx.Parser()
parser.parse_file("data/activity_twin_cities_marathon.tcx")
activity = parser.activity
author   = activity.author
creator  = activity.creator
trackpoints = activity.trackpoints

console.log('parser = new tcx.Parser()')
console.log('parser.parse_file("data/activity_twin_cities_marathon.tcx")')
console.log('activity = parser.activity')
console.log('creator  = activity.creator')
console.log('author   = activity.author')
console.log('trackpoints = activity.trackpoints')
console.log('```')

console.log('')
console.log('"creator" is the device that recorded the data')
console.log('')
console.log('```')
console.log("console.log(JSON.stringify(creator, null, 2)) -> \n" + JSON.stringify(creator, null, 2))
console.log('```')

console.log('')
console.log('"author" is what created the tcx/xml file')
console.log('')
console.log('```')
console.log("console.log(JSON.stringify(author, null, 2)) -> \n" + JSON.stringify(author, null, 2))
console.log('```')

console.log('')
console.log('"trackpoints" is an Array of the recorded data points')
console.log('')
console.log('```')
console.log("console.log(trackpoints.length) -> " + trackpoints.length)
console.log('')
console.log("console.log(JSON.stringify(trackpoints[0], null, 2)) -> \n" + JSON.stringify(trackpoints[0], null, 2))
console.log('')
console.log("console.log(JSON.stringify(trackpoints[trackpoints.length - 1], null, 2)) -> \n" + JSON.stringify(trackpoints[trackpoints.length - 1], null, 2))
console.log('```')
console.log('')

console.log('#### Parse, with Augmented Calculated fields')
console.log('')
console.log("tcx-js will optionally calculate and add the 'alt_feet' and 'dist_miles' fields to ")
console.log('each trackpoint, if you configure the parser as follows: ')
console.log('')

opts = {}
opts.alt_feet = true
opts.dist_miles = true
p2 = new tcx.Parser(opts)
p2.parse_file("data/activity_twin_cities_marathon.tcx")
a2 = p2.activity
t2 = a2.trackpoints

console.log('```')
console.log('opts = {}')
console.log('opts.alt_feet = true')
console.log('opts.dist_miles = true')
console.log('')
console.log('p2 = new tcx.Parser(opts)')
console.log('p2.parse_file("data/activity_twin_cities_marathon.tcx")')
console.log('a2 = p2.activity')
console.log('t2 = a2.trackpoints')
console.log("console.log(JSON.stringify(t2[t2.length - 1], null, 2)) -> \n" + JSON.stringify(t2[t2.length - 1], null, 2))
console.log('```')

console.log('')
console.log('The version number of this library, and other constant values, can be determined at runtime.')
console.log('')
console.log('```')
console.log('Parser.VERSION         -> ' + tcx.Parser.VERSION)
console.log('Parser.FEET_PER_METER  -> ' + tcx.Parser.FEET_PER_METER)
console.log('Parser.METERS_PER_MILE -> ' + tcx.Parser.METERS_PER_MILE)
console.log('```')
console.log('')

# ------------------------------------------------------------------
# THE REMAINDER OF THIS FILE IS FOR DEVELOPMENT USE:
#
# Generate when-clauses for a switch statement based on path:
# console.log('switch path')
# prev = ''
# for p in parser.unique_paths.sort()
#   if p != prev
#     prev = p
#     console.log('  when "' + p + '"')
#     console.log('    x = 0')

filename = 'data/activity_twin_cities_marathon.json'
fs.writeFileSync(filename, JSON.stringify(parser.activity, null, 2))
