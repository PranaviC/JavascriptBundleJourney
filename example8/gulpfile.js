var gulp = require('gulp');
var webpack = require('webpack-stream');
var named = require('vinyl-named');

gulp.task('default', function() {
  return gulp.src('main.js')
	.pipe(named())
    .pipe(webpack())
    .pipe(gulp.dest('dist/'));
});
