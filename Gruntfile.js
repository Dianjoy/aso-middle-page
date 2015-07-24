/**
 * Created by meathill on 15/7/24.
 */
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {

      }
    },
    cssmin: {
      options: {
        report: 'gzip'
      },
      target: {
        files: {
          'css/screen.min.css': 'css/screen.css'
        }
      }
    },
    imagemin: {
      target: {
        files: {
          'dist/app-store.png': 'img/app-store.png'
        }
      }
    },
    compress: {
      target: {
        options: {
          archive: 'output.zip'
        },
        files: [
          { src: 'index.html', dest: ''},
          { src: 'css/screen.min.css', dest: ''},
          {
            src: ['app-store.png'],
            dest: 'img/',
            expand: true,
            cwd: 'dist/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', [
    'compass',
    'cssmin',
    'imagemin',
    'compress'
  ]);
};