var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function () {
    return browserify({entries: 'main.js'})
        .transform(babelify, {presets: ["es2015"]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});