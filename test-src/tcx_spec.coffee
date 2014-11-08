###
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
###

tcx = require('../lib/tcx.js')

describe 'tcx.Parser', ->

  it 'defines VERSION', ->
    expect(tcx.Parser.VERSION).toBe('0.0.1')
