const gulp = require("gulp");
const inline = require("gulp-inline");

gulp.task("default", () => {
  return gulp
    .src("./dist/*/*.html")
    .pipe(inline())
    .pipe(gulp.dest("./dist-single"));
});

// Build Angular app with ng build
// after that run npx gulp to compile the build output to a single file
