var
  gulp = require('gulp'),
  less = require('gulp-less'),
  cleancss = require('gulp-clean-css'),
  sourcemaps = require('gulp-sourcemaps'),
  sequence = require("gulp-sequence");

//实际只使用了压缩后的app-all.css
gulp.task('less-app', function () {
  return gulp.src(['less/app-all.less'])
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(cleancss())
    .pipe(gulp.dest('css/css-build'));

});

//将less文件单独生成css,不做压缩
//这里生成的css并没有用，只是生成后方便检查css样式是否写错
gulp.task('less-check', function () {
  return gulp.src(['less/*.less'])
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css/css-check'));
});

gulp.task('watch', function () {
  gulp.watch('less/*.less', ['build']);
});

gulp.task("build", sequence(
  ['less-check', 'less-app']
));

gulp.task("default", ["build"], function () {});
