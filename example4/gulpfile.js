var gulp = require('gulp');
var concat = require('gulp-concat');  

gulp.task('default', function() {  
    return gulp.src(['functional-utils.js','add.js','addList.js','sum.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('.'));
});
