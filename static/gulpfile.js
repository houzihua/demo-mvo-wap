var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
  gulp.src(['less/app-all.less'])
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css/css-build'));
});


gulp.task('default', function() {
  gulp.start('less');
});
