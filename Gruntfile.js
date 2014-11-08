module.exports = function (grunt) {

  var config = {

    coffee: {
      compile: {
        options: {
          join: true
        },
        files: {
          'lib/tcx.js':          ['src/*.coffee'],
          'test/tcx_spec.js':    ['test-src/tcx_spec.coffee'],
          'test/spec_helper.js': ['test-src/spec_helper.coffee'],
          'examples.js':         ['test-src/examples.coffee']
        }
      }
    }

  };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', [ 'coffee' ]);
};