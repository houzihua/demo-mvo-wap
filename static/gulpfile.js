var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less-all', function () {
  gulp.src(['less/app-all.less'])
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css/css-build'));
});

gulp.task('watch', function () {
  gulp.watch('less/*.less', ['less-all']); //当所有less文件发生改变时，调用testLess任务
});

gulp.task('default', function() {
  gulp.start('less-all');
});
