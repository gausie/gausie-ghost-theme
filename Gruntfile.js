module.exports = function(grunt) {

    grunt.initConfig({

        favicons: {
          options: {
            appleTouchBackgroundColor: 'none'
          },
          icons: {
            src: './assets/images/favicon.svg',
            dest: './assets/images'
          }
        },

    });

    // Default options

    grunt.loadNpmTasks('grunt-favicons');

    grunt.registerTask('default', ['favicons']);

};

