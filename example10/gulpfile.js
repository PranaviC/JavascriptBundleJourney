var gulp = require("gulp");
var amdOptimize = require("amd-optimize");
var concat = require("gulp-concat");

gulp.task("default", function() {
  gulp
    .src("*.js")
    .pipe(amdOptimize("main"))
    .pipe(concat("main-bundle.js"))
    .pipe(gulp.dest("."));
});