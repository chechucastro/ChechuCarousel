module.exports = function (grunt) {

  grunt.initConfig({
    project: {
      name: "ChechuFormValidator"
    },
    uglify: {
      def: {
        files: {
          '/min/<%= project.name %>.min.js': '/src/<%= project.name %>.js'
        }
      },
      build: {
        src: 'src/<%= project.name %>.js',
        dest: 'min/<%= project.name %>.min.js'
      }
    },
    stylus: {
      dist: {
        options: {
          compress: false // Don't forget to change this to TRUE before the last upload
        },
        files: {
          'css/style.css': 'styl/style.styl'
        }
      }
    },
    jsbeautifier : {
      files : ["src/*.js"]
    },
    browserSync: {
        dev: {
            bsFiles: {
                 src : [
                  'css/*.css',
                  'styl/*.styl',
                  'img/*',
                  'src/*.js',
                  '**/*.html'
                ]
            },
            options: {
                watchTask: true
            }
        }
    },
    watch: {
      def: {
        files: ['src/*.js', 'styl/*.styl'],
        tasks: ['newer:uglify', 'stylus','jsbeautifier']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Calling...
  grunt.registerTask('default', ['browserSync','watch:def']);
};
