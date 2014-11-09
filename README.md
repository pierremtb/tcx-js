## tcx-js

### Purpose

A Node.js library for parsing TCX/XML files, such as from a Garmin GPS device.

### Examples

#### Setup

Add tcx-js to your project or package.json file:
```
npm install tcx-js
```

Require tcx-js in your code:
```
tcx = require("tcx-js")
```

#### Parse a TCX file from Garmin Connect

Parsing elapsed time is typically sub-second, even for a marathon run.
The tcx-js Parser uses the 'node-expat' library, and the SAX API, for speed and performance.

```
parser = new tcx.Parser()
parser.parse_file("data/activity_twin_cities_marathon.tcx")
activity = parser.activity
creator  = activity.creator
author   = activity.author   #
trackpoints = activity.trackpoints
```

"creator" is the device that recorded the data

```
console.log(JSON.stringify(creator)) ->
{"name":"Garmin Forerunner 620","unit_id":"3875991210","product_id":"1623","version_major":"3","version_minor":"0","build_major":"0","build_minor":"0"}
```

"author" is what created the tcx/xml file

```
console.log(JSON.stringify(author)) ->
{"name":"Garmin Connect API","version_major":"14","version_minor":"10","build_major":"0","build_minor":"0","lang":"en","part_number":"006-D2449-00"}
```

"trackpoints" is an Array of the recorded data points

```
console.log(trackpoints.length) -> 2256

console.log(JSON.stringify(trackpoints[0], null, 2)) ->
{
  "time": "2014-10-05T13:07:53.000Z",
  "lat": "44.97431952506304",
  "lng": "-93.26310088858008",
  "alt_meters": "257.0",
  "dist_meters": "0.0",
  "hr_bpm": "85",
  "run_cadence": "89"
}

console.log(JSON.stringify(trackpoints[trackpoints.length - 1], null, 2)) ->
{
  "time": "2014-10-05T17:22:17.000Z",
  "lat": "44.95180849917233",
  "lng": "-93.10493202880025",
  "alt_meters": "260.0",
  "dist_meters": "42635.44921875",
  "hr_bpm": "161",
  "run_cadence": "77"
}
```


The version number of this library can be determined at runtime.

```
Parser.VERSION  -> 0.0.1
```

### Release History

* 2014-11-09   v0.0.1  alpha 1
