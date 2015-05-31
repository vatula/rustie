var vinylPaths  = require('vinyl-paths');
var rename      = require('gulp-rename');
var babel       = require('gulp-babel');
var mocha       = require('gulp-mocha');
var gulp        = require('gulp');
var del         = require('del');
                  require('babel-core/register');

var sources = 'src/main/javascript';
var tests   = 'src/test/javascript';
var project = 'com/robobeak/rustie';

gulp.task('clear', function() {
  return gulp.src('lib/*', {read: false})
    .pipe(vinylPaths(del));
});

gulp.task('default', ['clear'], function() {
  return gulp.src([sources, project, 'rustie.js'].join('/'))
    .pipe(babel())
    .pipe(rename({basename: 'index'}))
    .pipe(gulp.dest('lib'));
});

gulp.task('test', function() {
  return gulp.src([tests, project, '**/*.js'].join('/'), {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});