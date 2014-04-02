module.exports = function (grunt) {

  grunt.initConfig({
    project: {
      name: "ChechuCarousel"
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
          style: 'compressed'
        },
        files: {
          'css/style.css': 'styl/style.styl'
        }
      }
    },
    watch: {
      def: {
        files: ['src/*.js', 'styl/*.styl'],
        tasks: ['newer:uglify', 'stylus']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  // Calling...
  grunt.registerTask('default', ['watch:def']);
};
