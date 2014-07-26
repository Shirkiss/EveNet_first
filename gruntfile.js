/**
 * Created by shir123 on 25/07/2014.
 */

module.exports = function(grunt) {

// Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browerify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
//        uglify: {
//            my_target:{
//                files: {
//                    'js/script.js': ['js/*.js']
//
//                } //files
//            } //my_target
//        }, //uglify
        watch:{
            options: {livereload: true},
            scripts: {
                files: ['components/scripts/*.js',
                        'builds/development/js/*.js'
                ]
//                tasks: ['uglify']
            },
            html:{
                files: ['builds/development/*.html']

            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'components/scripts/angular.min.js',
                    'components/scripts/controllers.js',
                    'components/scripts/angular-route.min.js',
                    'components/scripts/jquery.min.js',
                    'components/scripts/modernizr.custom.28468.js',
                    'components/scripts/jquery.cslider.js',
                    'components/scripts/responsive.menu.js',
                    'components/scripts/jquery.flexisel.js',
                    'components/scripts/move-top.js',
                    'components/scripts/easing.js',
                    'components/scripts/*.js'

                ],
                dest: 'builds/development/js/script.js'
            }
        } // concat
    }); //initconfig
    grunt.registerTask('default', 'watch');
} //exports
