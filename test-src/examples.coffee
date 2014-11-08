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

parser = new tcx.Parser(false)
parser.parse_file('data/activity_twin_cities_marathon.tcx')

# Generate when-clauses for a switch statement based on path:
# console.log('switch path')
# prev = ''
# for p in parser.unique_paths.sort()
#   if p != prev
#     prev = p
#     console.log('  when "' + p + '"')
#     console.log('    x = 0')

# for tkpt in parser.activity.trackpoints
#   console.log('tkpt: ' + JSON.stringify(tkpt))

filename = 'data/activity_twin_cities_marathon.json'
fs.writeFileSync(filename, JSON.stringify(parser.activity, null, 2))
console.log('file written: ' + filename)

console.log('```')
console.log('```')
console.log('')
