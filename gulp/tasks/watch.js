var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();



    gulp.task('watch', function(){

      browserSync.init({
        server: {
          baseDir: "app"
        }
      });

      watch('./app/index.html', function(){
        browserSync.reload();
      });

      watch('./app/assets/styles/css/**/*.css', function(){
        gulp.start('cssInject');
      });

      watch('./app/assets/scripts/**/*.js', function(){
        gulp.start('scriptsInject');
      });
    });


    gulp.task('cssInject', ['styles'], function(){
      return gulp.src('./app/assets/styles/styles.css')
        .pipe(browserSync.stream());
    });

    gulp.task('scriptsInject', ['scripts'], function(){
      browserSync.reload();
    });