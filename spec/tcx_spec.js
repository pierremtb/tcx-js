
/*
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
 */

(function() {
  var tcx;

  tcx = require('../lib/tcx.js');

  describe('tcx.Parser', function() {
    return it('defines VERSION', function() {
      expect(tcx.Parser.VERSION).toBe('0.0.1');
      return console.log('here');
    });
  });

}).call(this);
