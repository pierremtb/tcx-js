
/*
This file demonstrates the use of the tcx-js library with node.js.
Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>
 */

(function() {
  var activity, elapsed, epoch0, fs, infile, m26, opts, outfile, parser, tcx;

  fs = require('fs');

  m26 = require("m26-js");

  tcx = require("./lib/tcx.js");

  if (process.argv.length > 3) {
    infile = process.argv[2];
    outfile = process.argv[3];
    epoch0 = new Date().getTime();
    opts = {
      dist_miles: true,
      elapsed: true,
      alt_feet: true
    };
    parser = new tcx.Parser(opts);
    parser.parse_file(infile);
    activity = parser.activity;
    elapsed = (new Date().getTime()) - epoch0;
    console.log('parser elapsed ms: ' + elapsed + ' trackpoint count: ' + activity.trackpoints.length);
    fs.writeFileSync(outfile, JSON.stringify(activity.trackpoints, null, 2));
    console.log('output file written: ' + outfile);
    console.log('first trackpoint: ' + JSON.stringify(activity.trackpoints[0], null, 2));
    console.log('last trackpoint: ' + JSON.stringify(activity.trackpoints[activity.trackpoints.length - 1], null, 2));
  } else {
    console.log('please provide input and output filenames on the command-line');
  }

}).call(this);
