
/*
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
 */

(function() {
  var pkg, tcx;

  tcx = require('../lib/tcx.js');

  pkg = require('../package.json');

  describe('tcx.Parser', function() {
    it('defines VERSION', function() {
      var code_version, expected, pkg_version;
      expected = '0.1.1';
      code_version = tcx.Parser.VERSION;
      pkg_version = pkg.version;
      expect(code_version).toBe(expected);
      return expect(code_version).toBe(expected);
    });
    return it('parses the Twin Cities Marathon sample data, quickly', function() {
      var activity, author, creator, elapsed_ms, finish_ms, parser, start_ms, t, trackpoints;
      start_ms = (new Date()).getTime();
      parser = new tcx.Parser();
      parser.parse_file('data/activity_twin_cities_marathon.tcx');
      finish_ms = (new Date()).getTime();
      elapsed_ms = finish_ms - start_ms;
      expect(elapsed_ms).toBeLessThan(500);
      activity = parser.activity;
      author = activity.author;
      creator = activity.creator;
      trackpoints = activity.trackpoints;
      expect(creator.name).toBe('Garmin Forerunner 620');
      expect(creator.unit_id).toBe('3875991210');
      expect(creator.product_id).toBe('1623');
      expect(creator.version_major).toBe('3');
      expect(creator.version_minor).toBe('0');
      expect(creator.build_major).toBe('0');
      expect(creator.build_minor).toBe('0');
      expect(author.name).toBe('Garmin Connect API');
      expect(author.version_major).toBe('14');
      expect(author.version_minor).toBe('10');
      expect(author.build_major).toBe('0');
      expect(author.build_minor).toBe('0');
      expect(author.lang).toBe('en');
      expect(author.part_number).toBe('006-D2449-00');
      expect(trackpoints.length).toBe(2256);
      t = trackpoints[0];
      expect(t.time).toBe('2014-10-05T13:07:53.000Z');
      expect(t.lat).toBe('44.97431952506304');
      expect(t.lng).toBe('-93.26310088858008');
      expect(t.alt_meters).toBe('257.0');
      expect(t.dist_meters).toBe('0.0');
      expect(t.hr_bpm).toBe('85');
      expect(t.run_cadence).toBe('89');
      t = trackpoints[2255];
      expect(t.time).toBe('2014-10-05T17:22:17.000Z');
      expect(t.lat).toBe('44.95180849917233');
      expect(t.lng).toBe('-93.10493202880025');
      expect(t.alt_meters).toBe('260.0');
      expect(t.dist_meters).toBe('42635.44921875');
      expect(t.hr_bpm).toBe('161');
      return expect(t.run_cadence).toBe('77');
    });
  });

}).call(this);
