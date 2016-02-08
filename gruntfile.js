
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                atBegin: true
            },
            sass: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass']
            }
        },
        browserify: {
            publish: {
                files: {
                    'resources/js/route-planner.js': ['src/js/main.js']
                },
                options: {
                    transform: ['babelify']
                }
            }
        },
        watchify: {
            app: {
                src: 'src/js/main.js',
                dest: 'resources/js/route-planner.js'
            }
        },
        sass: {
            app: {
                files: {
                    'resources/css/main.css': 'src/scss/main.scss'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8888,
                    keepalive: true
                }
            },
            keepalive: true
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('build-js', ['browserify:publish']);
    grunt.registerTask('build-css', ['sass']);
    grunt.registerTask('default', ['build-js', 'build-css']);

}