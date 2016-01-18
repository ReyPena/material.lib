var gulp = require("gulp")
  , concat = require("gulp-concat")
  , uglify =  require("gulp-uglify")
  , uglifyCss = require("gulp-uglifycss")
  , sass = require("gulp-sass")
  , path = require("path")
  , watch = require("gulp-watch");

var paths = {
  scss: "./scss/*.scss",
  // components:
};

gulp.task("cssLib", function () {
  gulp.src(paths.scss)
    .pipe(sass({paths: [path.join(__dirname, "styles")]}))
    .pipe(concat("Csslib.css"))
    .pipe(gulp.dest("./dist"));
});

gulp.task("cssLibMin", function () {
  gulp.src(paths.scss)
    .pipe(sass({paths: [path.join(__dirname, "styles")]}))
    // .pipe(uglifyCss())
    .pipe(concat("miniCsslib.css"))
    .pipe(gulp.dest("./dist"));
});

gulp.task("watch", function () {
  gulp.watch(paths.scss, ["cssLib", "cssLibMin"]);
  // gulp.watch(paths.components, ["cssLib", "cssLibMin"]);
});

gulp.task("default", ["watch", "cssLib", "cssLibMin"]);
