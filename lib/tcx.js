
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

    function Parser(verbose) {
      if (verbose == null) {
        verbose = false;
      }
      this.parse_file = __bind(this.parse_file, this);
      this.verbose = verbose;
      this.parser = new expat.Parser('UTF-8');
      this.entries = [];
      this.stack = [];
      this.curr_tag = void 0;
      this.curr_text = '';
      this.curr_entry = void 0;
      this.unique_paths = [];
      this.end_reached = false;
      this.author = {};
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
          p = _this.curr_path();
          if (_this.verbose) {
            console.log('end: ' + p + " -> " + _this.curr_text);
          }
          switch (p) {
            case "Activities":
              x = 0;
              break;
            case "Activities|Activity":
              x = 0;
              break;
            case "Activities|Activity@Sport":
              x = 0;
              break;
            case "Activities|Activity|Creator":
              x = 0;
              break;
            case "Activities|Activity|Creator@xsi:type":
              x = 0;
              break;
            case "Activities|Activity|Creator|Name":
              x = 0;
              break;
            case "Activities|Activity|Creator|ProductID":
              x = 0;
              break;
            case "Activities|Activity|Creator|UnitId":
              x = 0;
              break;
            case "Activities|Activity|Creator|Version":
              x = 0;
              break;
            case "Activities|Activity|Creator|Version|BuildMajor":
              x = 0;
              break;
            case "Activities|Activity|Creator|Version|BuildMinor":
              x = 0;
              break;
            case "Activities|Activity|Creator|Version|VersionMajor":
              x = 0;
              break;
            case "Activities|Activity|Creator|Version|VersionMinor":
              x = 0;
              break;
            case "Activities|Activity|Id":
              x = 0;
              break;
            case "Activities|Activity|Lap":
              x = 0;
              break;
            case "Activities|Activity|Lap@StartTime":
              x = 0;
              break;
            case "Activities|Activity|Lap|AverageHeartRateBpm":
              x = 0;
              break;
            case "Activities|Activity|Lap|AverageHeartRateBpm|Value":
              x = 0;
              break;
            case "Activities|Activity|Lap|Calories":
              x = 0;
              break;
            case "Activities|Activity|Lap|DistanceMeters":
              x = 0;
              break;
            case "Activities|Activity|Lap|Extensions":
              x = 0;
              break;
            case "Activities|Activity|Lap|Extensions|LX":
              x = 0;
              break;
            case "Activities|Activity|Lap|Extensions|LX@xmlns":
              x = 0;
              break;
            case "Activities|Activity|Lap|Extensions|LX|AvgRunCadence":
              x = 0;
              break;
            case "Activities|Activity|Lap|Extensions|LX|AvgSpeed":
              x = 0;
              break;
            case "Activities|Activity|Lap|Extensions|LX|MaxRunCadence":
              x = 0;
              break;
            case "Activities|Activity|Lap|Extensions|LX|Steps":
              x = 0;
              break;
            case "Activities|Activity|Lap|Intensity":
              x = 0;
              break;
            case "Activities|Activity|Lap|MaximumHeartRateBpm":
              x = 0;
              break;
            case "Activities|Activity|Lap|MaximumHeartRateBpm|Value":
              x = 0;
              break;
            case "Activities|Activity|Lap|MaximumSpeed":
              x = 0;
              break;
            case "Activities|Activity|Lap|TotalTimeSeconds":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track|Trackpoint":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track|Trackpoint|AltitudeMeters":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track|Trackpoint|DistanceMeters":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track|Trackpoint|Extensions":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track|Trackpoint|Extensions|TPX":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track|Trackpoint|Extensions|TPX@xmlns":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track|Trackpoint|Extensions|TPX|RunCadence":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track|Trackpoint|Extensions|TPX|Speed":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track|Trackpoint|HeartRateBpm":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track|Trackpoint|HeartRateBpm|Value":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track|Trackpoint|Position":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track|Trackpoint|Position|LatitudeDegrees":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track|Trackpoint|Position|LongitudeDegrees":
              x = 0;
              break;
            case "Activities|Activity|Lap|Track|Trackpoint|Time":
              x = 0;
              break;
            case "Activities|Activity|Lap|TriggerMethod":
              x = 0;
              break;
            case "Author|Build|Version|BuildMajor":
              _this.author.build_major = _this.curr_text;
              break;
            case "Author|Build|Version|BuildMinor":
              _this.author.build_minor = _this.curr_text;
              break;
            case "Author|Build|Version|VersionMajor":
              _this.author.version_major = _this.curr_text;
              break;
            case "Author|Build|Version|VersionMinor":
              _this.author.version_minor = _this.curr_text;
              break;
            case "Author|LangID":
              _this.author.lang = _this.curr_text;
              break;
            case "Author|Name":
              _this.author.name = _this.curr_text;
              break;
            case "Author|PartNumber":
              _this.author.part_number = _this.curr_text;
          }
          _this.stack.pop();
          _this.curr_tag = void 0;
          _this.curr_text = '';
          if (name === _this.stack[0]) {
            return _this.end_reached = true;
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
