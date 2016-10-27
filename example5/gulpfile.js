var gulp = require('gulp');
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify');  

gulp.task('default', function() {  
    return gulp.src(['functional-utils.js','add.js','addList.js','sum.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('.'))
		.pipe(rename('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});
