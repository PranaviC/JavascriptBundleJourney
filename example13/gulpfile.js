var gulp = require('gulp');
var gulp_jspm = require('gulp-jspm');
 
gulp.task('default', function(){
    return gulp.src('main.js')
        .pipe(gulp_jspm({selfExecutingBundle: true})) 
        .pipe(gulp.dest('dist/'));
});