var gulp = require("gulp")
  , concat = require("gulp-concat")
  , uglify =  require("gulp-uglify")
  , uglifyCss = require("gulp-uglifycss")
  , sass = require("gulp-sass")
  , watch = require("gulp-watch");

var paths = {
  scss: "./scss/*.scss",
  // components:
};

gulp.task("cssLib", function () {
  gulp.src(path.scss)
    .pipe(sass())
    .pipe(concat("./dis/Csslib.css"));
});

gulp.task("cssLibMin", function () {
  gulp.src(path.scss)
    .pipe(sass())
    .pipe(uglifyCss())
    .pipe(concat("./dis/miniCsslib.css"));
});

gulp.task("watch", function () {
  gulp.watch(paths.scss, ["cssLib", "cssLibMin"]);
  gulp.watch(paths.components, ["cssLib", "cssLibMin"]);
});

gulp.task("default", []);
