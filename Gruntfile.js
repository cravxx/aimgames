module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        ignores: ['node_modules/**/*.js', 'drone-ver/**/*.js']
      },
      scripts: ['Gruntfile.js', '**/*.user.js', "**/*.js"]
    },
    watch: {
     js: {
       files: ["!node_modules/**", "!drone-ver/**", 'Gruntfile.js', '**/*.user.js', "**/*.js"],
       tasks: ['jshint:scripts']
     }
   }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('bleedTheFreak', ['jshint:scripts']);

};
