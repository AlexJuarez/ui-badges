// Gruntfile.js

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      badges: {
        src: 'icons/badges/*.svg',
        dest: 'src/fonts',
        destCss: 'src/styles',
        options: {
          htmlDemo: false,
          font: 'profile-badges',
          stylesheet: 'less',
          fontFilename: 'badges-{hash}',
          syntax: 'bootstrap',
          template: 'icons/badges/badge-template.less',
          relativeFontPath: '/fonts'
        }
      }
    },
    clean: {
      fonts: ['src/fonts/']
    }
  });

  grunt.registerTask('default', ['clean:fonts', 'webfont']);
};
