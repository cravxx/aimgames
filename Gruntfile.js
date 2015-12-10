module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      scripts: ['Gruntfile.js', '**/*.user.js', "**/*.js"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('bleedTheFreak', ['jshint:scripts']);

};
