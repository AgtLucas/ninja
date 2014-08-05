'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      return {
        dist: {
          files: {
            'build/js/bundle.js': ['app.js']
          }
        }
      }
    }

  grunt.registerTask('default', ['browserify']);

}