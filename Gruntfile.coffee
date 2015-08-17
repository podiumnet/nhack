module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON "package.json"
    coffee:
      default:
        expand: true
        cwd: "src"
        src: ["*.coffee", "**/*.coffee"]
        dest: "compiled"
        ext: ".js"
    concat:
      options:
        banner: '#!/usr/bin/env node\n\n'
      dist:
        src: 'compiled/index.js'
        dest: 'compiled/index.js'

  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-concat"

  grunt.registerTask "default", ["coffee", "concat"]
