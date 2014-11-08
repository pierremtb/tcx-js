
/*
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
 */

(function() {
  var Entry, Parser, expat, fs, root,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  expat = require('node-expat');

  fs = require('fs');

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  Entry = (function() {
    function Entry(tag, path, attrs) {
      var n, v;
      this.add_value('type', attrs.type);
      this.add_value('path', path);
      for (n in attrs) {
        v = attrs[n];
        this[n] = v;
      }
    }

    return Entry;

  })();

  Parser = (function() {
    Parser.VERSION = '0.0.1';

    function Parser() {
      this.parse_file = __bind(this.parse_file, this);
      this.parser = new expat.Parser('UTF-8');
      this.entries = [];
      this.stack = [];
      this.curr_tag = void 0;
      this.curr_text = '';
      this.curr_entry = void 0;
      this.unique_paths = [];
      this.end_reached = false;
      this.parser.on('startElement', (function(_this) {
        return function(name, attrs) {
          var cp, n, v, _results;
          _this.stack.push(name);
          _this.curr_tag = name;
          _this.curr_text = '';
          cp = _this.curr_path();
          _this.unique_paths.push(cp);
          _results = [];
          for (n in attrs) {
            v = attrs[n];
            _results.push(_this.unique_paths.push(cp + '@' + n));
          }
          return _results;
        };
      })(this));
      this.parser.on('endElement', (function(_this) {
        return function(name) {
          var p, x;
          _this.stack.pop();
          _this.curr_tag = void 0;
          _this.curr_text = '';
          if (name === _this.stack[0]) {
            _this.end_reached = true;
          }
          p = 'xxx';
          switch (p) {
            case "Activities":
              return x = 0;
            case "Activities|Activity":
              return x = 0;
            case "Activities|Activity@Sport":
              return x = 0;
            case "Activities|Activity|Creator":
              return x = 0;
            case "Activities|Activity|Creator@xsi:type":
              return x = 0;
            case "Activities|Activity|Creator|Name":
              return x = 0;
            case "Activities|Activity|Creator|ProductID":
              return x = 0;
            case "Activities|Activity|Creator|UnitId":
              return x = 0;
            case "Activities|Activity|Creator|Version":
              return x = 0;
            case "Activities|Activity|Creator|Version|BuildMajor":
              return x = 0;
            case "Activities|Activity|Creator|Version|BuildMinor":
              return x = 0;
            case "Activities|Activity|Creator|Version|VersionMajor":
              return x = 0;
            case "Activities|Activity|Creator|Version|VersionMinor":
              return x = 0;
            case "Activities|Activity|Id":
              return x = 0;
            case "Activities|Activity|Lap":
              return x = 0;
            case "Activities|Activity|Lap@StartTime":
              return x = 0;
            case "Activities|Activity|Lap|AverageHeartRateBpm":
              return x = 0;
            case "Activities|Activity|Lap|AverageHeartRateBpm|Value":
              return x = 0;
            case "Activities|Activity|Lap|Calories":
              return x = 0;
            case "Activities|Activity|Lap|DistanceMeters":
              return x = 0;
            case "Activities|Activity|Lap|Extensions":
              return x = 0;
            case "Activities|Activity|Lap|Extensions|LX":
              return x = 0;
            case "Activities|Activity|Lap|Extensions|LX@xmlns":
              return x = 0;
            case "Activities|Activity|Lap|Extensions|LX|AvgRunCadence":
              return x = 0;
            case "Activities|Activity|Lap|Extensions|LX|AvgSpeed":
              return x = 0;
            case "Activities|Activity|Lap|Extensions|LX|MaxRunCadence":
              return x = 0;
            case "Activities|Activity|Lap|Extensions|LX|Steps":
              return x = 0;
            case "Activities|Activity|Lap|Intensity":
              return x = 0;
            case "Activities|Activity|Lap|MaximumHeartRateBpm":
              return x = 0;
            case "Activities|Activity|Lap|MaximumHeartRateBpm|Value":
              return x = 0;
            case "Activities|Activity|Lap|MaximumSpeed":
              return x = 0;
            case "Activities|Activity|Lap|TotalTimeSeconds":
              return x = 0;
            case "Activities|Activity|Lap|Track":
              return x = 0;
            case "Activities|Activity|Lap|Track|Trackpoint":
              return x = 0;
            case "Activities|Activity|Lap|Track|Trackpoint|AltitudeMeters":
              return x = 0;
            case "Activities|Activity|Lap|Track|Trackpoint|DistanceMeters":
              return x = 0;
            case "Activities|Activity|Lap|Track|Trackpoint|Extensions":
              return x = 0;
            case "Activities|Activity|Lap|Track|Trackpoint|Extensions|TPX":
              return x = 0;
            case "Activities|Activity|Lap|Track|Trackpoint|Extensions|TPX@xmlns":
              return x = 0;
            case "Activities|Activity|Lap|Track|Trackpoint|Extensions|TPX|RunCadence":
              return x = 0;
            case "Activities|Activity|Lap|Track|Trackpoint|Extensions|TPX|Speed":
              return x = 0;
            case "Activities|Activity|Lap|Track|Trackpoint|HeartRateBpm":
              return x = 0;
            case "Activities|Activity|Lap|Track|Trackpoint|HeartRateBpm|Value":
              return x = 0;
            case "Activities|Activity|Lap|Track|Trackpoint|Position":
              return x = 0;
            case "Activities|Activity|Lap|Track|Trackpoint|Position|LatitudeDegrees":
              return x = 0;
            case "Activities|Activity|Lap|Track|Trackpoint|Position|LongitudeDegrees":
              return x = 0;
            case "Activities|Activity|Lap|Track|Trackpoint|Time":
              return x = 0;
            case "Activities|Activity|Lap|TriggerMethod":
              return x = 0;
            case "Author":
              return x = 0;
            case "Author|Build":
              return x = 0;
            case "Author|Build|Version":
              return x = 0;
            case "Author|Build|Version|BuildMajor":
              return x = 0;
            case "Author|Build|Version|BuildMinor":
              return x = 0;
            case "Author|Build|Version|VersionMajor":
              return x = 0;
            case "Author|Build|Version|VersionMinor":
              return x = 0;
            case "Author|LangID":
              return x = 0;
            case "Author|Name":
              return x = 0;
            case "Author|PartNumber":
              return x = 0;
          }
        };
      })(this));
      this.parser.on('text', (function(_this) {
        return function(text) {
          return _this.curr_text = _this.curr_text + text;
        };
      })(this));
      this.parser.on('error', (function(_this) {
        return function(error) {
          return console.log('error ' + JSON.stringify(error));
        };
      })(this));
    }

    Parser.prototype.parse_file = function(filename) {
      var xml_str;
      xml_str = fs.readFileSync(filename);
      return this.parser.parse(xml_str);
    };

    Parser.prototype.curr_path = function() {
      return this.stack.slice(1).join('|');
    };

    Parser.prototype.curr_full_path = function() {
      return this.stack.join('|');
    };

    Parser.prototype.curr_depth = function() {
      return this.stack.length;
    };

    Parser.prototype.log_unique_paths = function() {
      var path, prev, sorted, _i, _len, _results;
      sorted = this.unique_paths.slice(0).sort();
      prev = '';
      _results = [];
      for (_i = 0, _len = sorted.length; _i < _len; _i++) {
        path = sorted[_i];
        if (path !== prev) {
          prev = path;
          _results.push(console.log('unique_path: ' + path));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    return Parser;

  })();

  root.Parser = Parser;

}).call(this);
