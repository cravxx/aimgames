module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      scripts: ['Gruntfile.js', 'swearify/swearify.user.js']
    },
    watch: {
      js: {
        files: ['Gruntfile.js', 'swearify/swearify.user.js'],
        tasks: ['jshint:scripts']
      }
    },
    uglify: {
      my_target: {
        files: {
          'minjs/swearify.user.js': ['swearify/swearify.user.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('bleedTheFreak', ['jshint:scripts']);
  grunt.registerTask('makeRelease', ['uglify:my_target']);
};
