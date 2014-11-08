
/*
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
 */

(function() {
  var tcx;

  tcx = require('../lib/tcx.js');

  describe('tcx.Parser', function() {
    it('defines VERSION', function() {
      return expect(tcx.Parser.VERSION).toBe('0.0.1');
    });
    return it('parses the Twin Cities Marathon sample data', function() {
      var p;
      p = new tcx.Parser();
      p.parse_file('data/activity_twin_cities_marathon.tcx');
      return expect(p.author.name).toBe('Garmin Connect API');
    });
  });

}).call(this);
