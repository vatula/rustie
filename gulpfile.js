var vinylPaths  = require('vinyl-paths');
var rename      = require('gulp-rename');
var babel       = require('gulp-babel');
var mocha       = require('gulp-mocha');
var gulp        = require('gulp');
var del         = require('del');
                  require('babel-core/register');

gulp.task('clear', function() {
  return gulp.src('lib/index.js', {read: false})
    .pipe(vinylPaths(del));
});

gulp.task('default', ['clear'], function() {
  return gulp.src('src/rustie.js')
    .pipe(babel({stage: 1, optional: ['runtime']}))
    .pipe(rename({basename: 'index'}))
    .pipe(gulp.dest('lib'));
});

gulp.task('test', ['default'], function() {
  return gulp.src('test/**/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});