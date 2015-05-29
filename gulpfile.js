var vinylPaths  = require('vinyl-paths');
var rename      = require('gulp-rename');
var babel       = require('gulp-babel');
var gulp        = require('gulp');
var del         = require('del');

gulp.task('clear', function() {
  return gulp.src('lib/index.js')
    .pipe(vinylPaths(del));
});

gulp.task('default', ['clear'], function() {
  return gulp.src('src/rustie.js')
    .pipe(babel({stage: 1, optional: ['runtime']}))
    .pipe(rename({basename: 'index'}))
    .pipe(gulp.dest('lib'));
});