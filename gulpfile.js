var gulp = require("gulp")
  , concat = require("gulp-concat")
  , uglify =  require("gulp-uglify")
  , uglifyCss = require("gulp-uglifycss")
  , sass = require("gulp-sass")
  , watch = require("gulp-watch");

var paths = {
  scss: "./scss/**/*.scss",
  fonty: "./scss/fonts/**",
  dist: "./dist"
};

gulp.task("css", function () {
  gulp.src(paths.scss)
    .pipe(sass())
    .pipe(concat("materialesque.css"))
    .pipe(gulp.dest(paths.dist));
});

gulp.task("css-minified", function () {
  gulp.src(paths.scss)
    .pipe(sass())
    .pipe(uglifyCss())
    .pipe(concat("materialesque.min.css"))
    .pipe(gulp.dest(paths.dist));
});

gulp.task("fontCopy", function () {
  gulp.src(paths.fonty)
    .pipe(gulp.dest("./dist/fonts"));
});

gulp.task("watch", function () {
  gulp.watch(paths.scss, ["css", "css-minified"]);
});

gulp.task("default", ["css", "css-minified", "watch", "fontCopy"]);
