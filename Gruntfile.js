module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      scripts: ['Gruntfile.js',
                'swearify/swearify.user.js',
                'swearify/imagereuploader.user.js',
                'chameleon/chameleon.user.js',
                'chameleon/chameleon_random.user.js',
                'other/accountassist.user.js',
                'other/ratebot.user.js'
              ]
    },
    uglify: {
      my_target: {
        files: {
          'minjs/swearify.user.js': ['swearify/swearify.user.js'],
          'minjs/imagereuploader.user.js': ['swearify/imagereuploader.user.js'],
          'minjs/chameleon.user.js': ['chameleon/chameleon.user.js'],
          'minjs/chameleon_random.user.js': ['chameleon/chameleon_random.user.js'],
          'minjs/accountassist.user.js': ['other/accountassist.user.js'],
          'minjs/ratebot.user.js': ['other/ratebot.user.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('bleedTheFreak', ['jshint:scripts']);
  grunt.registerTask('makeRelease', ['uglify:my_target']);
};
