
/*
This purpose of this file is to test the generated tcx.js file, outside of jasmine,
before deployment to npm.  It (accurately) generates Examples section of the README.md
file based on actual working code and output.
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
 */

(function() {
  var activity, author, creator, filename, fs, parser, tcx, trackpoints;

  fs = require('fs');

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

  console.log('#### Parse a TCX file from Garmin Connect');

  console.log('');

  console.log('Parsing elapsed time is typically sub-second, even for a marathon run.');

  console.log("The tcx-js Parser uses the 'node-expat' library, and the SAX API, for speed and performance.");

  console.log('');

  console.log('Note: this library is implemented with CoffeeScript, and these examples are also in CoffeeScript.');

  console.log('');

  console.log('```');

  parser = new tcx.Parser();

  parser.parse_file("data/activity_twin_cities_marathon.tcx");

  activity = parser.activity;

  author = activity.author;

  creator = activity.creator;

  trackpoints = activity.trackpoints;

  console.log('parser = new tcx.Parser()');

  console.log('parser.parse_file("data/activity_twin_cities_marathon.tcx")');

  console.log('activity = parser.activity');

  console.log('creator  = activity.creator');

  console.log('author   = activity.author');

  console.log('trackpoints = activity.trackpoints');

  console.log('```');

  console.log('');

  console.log('"creator" is the device that recorded the data');

  console.log('');

  console.log('```');

  console.log("console.log(JSON.stringify(creator, null, 2)) -> \n" + JSON.stringify(creator, null, 2));

  console.log('```');

  console.log('');

  console.log('"author" is what created the tcx/xml file');

  console.log('');

  console.log('```');

  console.log("console.log(JSON.stringify(author, null, 2)) -> \n" + JSON.stringify(author, null, 2));

  console.log('```');

  console.log('');

  console.log('"trackpoints" is an Array of the recorded data points');

  console.log('');

  console.log('```');

  console.log("console.log(trackpoints.length) -> " + trackpoints.length);

  console.log('');

  console.log("console.log(JSON.stringify(trackpoints[0], null, 2)) -> \n" + JSON.stringify(trackpoints[0], null, 2));

  console.log('');

  console.log("console.log(JSON.stringify(trackpoints[trackpoints.length - 1], null, 2)) -> \n" + JSON.stringify(trackpoints[trackpoints.length - 1], null, 2));

  console.log('```');

  console.log('');

  console.log('');

  console.log('The version number of this library can be determined at runtime.');

  console.log('');

  console.log('```');

  console.log('Parser.VERSION  -> ' + tcx.Parser.VERSION);

  console.log('```');

  console.log('');

  filename = 'data/activity_twin_cities_marathon.json';

  fs.writeFileSync(filename, JSON.stringify(parser.activity, null, 2));

}).call(this);
