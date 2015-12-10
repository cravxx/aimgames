module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'swearify.user.js'],
      all: ['Gruntfile.js', 'myoot.user.js'],
      all: ['Gruntfile.js', 'usernamehistory.user.js'],
      all: ['Gruntfile.js', 'alive.user.js'],
      all: ['Gruntfile.js', 'chatboxplusplus.user.js'],
      all: ['Gruntfile.js', 'chameleon.user.js'],
      all: ['Gruntfile.js', 'chameleon_random.user.js'],
      all: ['Gruntfile.js', 'chameleon_vampire.user.js'],
      all: ['Gruntfile.js', 'accountassist.user.js'],
      all: ['Gruntfile.js', 'imagereuploader.user.js'],
      all: ['Gruntfile.js', 'awayinator.user.js'],
      all: ['Gruntfile.js', 'instantcena.user.js'],
      all: ['Gruntfile.js', 'instantisis.user.js'],
      all: ['Gruntfile.js', 'logger.user.js'],
      all: ['Gruntfile.js', 'loginlogout.user.js'],
      all: ['Gruntfile.js', 'scream.user.js'],
      all: ['Gruntfile.js', 'classicaim.user.js'],
      all: ['Gruntfile.js', 'mango.user.js'],

      all: ['Gruntfile.js', 'rafasrainbow.js'],
      all: ['Gruntfile.js', 'textUtils.js'],
      all: ['Gruntfile.js', 'give.js'],
      all: ['Gruntfile.js', 'chat_test.js'],
      all: ['Gruntfile.js', 'megachat.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);

};
