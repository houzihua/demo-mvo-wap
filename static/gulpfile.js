require('node-extensions');
const
  os = require('os'),
  gulp = require('gulp'),
  less = require('gulp-less'),
  cleancss = require('gulp-clean-css'),
  sourcemaps = require('gulp-sourcemaps'),
  sequence = require("gulp-sequence"),
  nop = require('gulp-nop'),
  rename = require("gulp-rename"),
  gulpNotify = require('gulp-notify'),
  nodemon = require('nodemon');


function notify(data){
  return os.platform() !== 'linux' ? gulpNotify(data) : nop();
}


//将less文件单独生成css,不做压缩
//这里生成的css并没有用，只是生成后方便检查css样式是否写错;
gulp.task('less-check', function () {
  return gulp.src(['less/*.less'])
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css/css-check'))
    .pipe(notify({
      message: '单文件css 任务完成'
    }));
});

//实际只使用了压缩后的app-all.css
gulp.task('less-app', ['less-check'], function () {
  return gulp.src(['less/app/app-all.less'])
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(cleancss())
    .pipe(gulp.dest('css'))
    .pipe(notify({
      message: 'app-all 任务完成'
    }));
});

gulp.task('watch', function () {
  gulp.watch('less/*.less',  ['less-check', 'less-app']);
});

gulp.task("build", sequence(
  ['less-check', 'less-app']
));

gulp.task("default", ["build"], function () {});
