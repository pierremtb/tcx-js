
/*
This purpose of this file is to test the generated tcx.js file, outside of jasmine,
before deployment to npm.  It (accurately) generates Examples section of the README.md
file based on actual working code and output.
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
 */

(function() {
  var parser, tcx, tkpt, _i, _len, _ref;

  tcx = require("./lib/tcx.js");

  console.log('');

  console.log('### Examples');

  console.log('');

  console.log('#### Setup');

  console.log('');

  console.log('Add tcx-js to your project or package.json file:');

  console.log('```');

  console.log('npm install tcx-js');

  console.log('```');

  console.log('');

  console.log('Require tcx-js in your code:');

  console.log('```');

  console.log('tcx = require("tcx-js")');

  console.log('```');

  console.log('');

  parser = new tcx.Parser(true);

  parser.parse_file('data/activity_twin_cities_marathon.tcx');

  _ref = parser.activity.trackpoints;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    tkpt = _ref[_i];
    console.log('tkpt: ' + JSON.stringify(tkpt));
  }

  console.log(JSON.stringify(parser.activity, null, 2));

  console.log('```');

  console.log('```');

  console.log('');

}).call(this);
