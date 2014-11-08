###
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
###

tcx = require('../lib/tcx.js')

describe 'tcx.Parser', ->

  it 'defines VERSION', ->
    expect(tcx.Parser.VERSION).toBe('0.0.1')

  it 'parses the Twin Cities Marathon sample data', ->
    p = new tcx.Parser()
    p.parse_file('data/activity_twin_cities_marathon.tcx')
    expect(p.author.name).toBe('Garmin Connect API')
