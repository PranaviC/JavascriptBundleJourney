
var gulp       = require('gulp'),
    rollup     = require('gulp-rollup');
   
 
gulp.task('default', function(){
  gulp.src('main.js', {read: false})
    .pipe(rollup())
    .pipe(gulp.dest('dist'));
});