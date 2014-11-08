###
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
###

beforeEach ->

  jasmine.Expectation.addMatchers({

    is11: () ->
      {
        compare: (actual) ->
          if actual == 11
            { pass: true, message: '' }
          else
            { pass: false, message: '' + actual + ' is not 11' }
      }
  })
