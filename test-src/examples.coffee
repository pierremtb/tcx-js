###
This purpose of this file is to test the generated tcx.js file, outside of jasmine,
before deployment to npm.  It (accurately) generates Examples section of the README.md
file based on actual working code and output.
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
###

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

parser = new tcx.Parser(true)
#console.log('version: ' + parser.VERSION)
parser.parse_file('data/activity_twin_cities_marathon.tcx')

# console.log('switch path')
# prev = ''
# for p in parser.unique_paths.sort()
#   if p != prev
#     prev = p
#     console.log('  when "' + p + '"')
#     console.log('    x = 0')

console.log('author: ' + JSON.stringify(parser.author))
console.log('```')
console.log('```')
console.log('')
