
/*
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
 */

(function() {
  beforeEach(function() {
    return jasmine.Expectation.addMatchers({
      is11: function() {
        return {
          compare: function(actual) {
            if (actual === 11) {
              return {
                pass: true,
                message: ''
              };
            } else {
              return {
                pass: false,
                message: '' + actual + ' is not 11'
              };
            }
          }
        };
      }
    });
  });

}).call(this);
