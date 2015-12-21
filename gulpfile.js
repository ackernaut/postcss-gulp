
// Require

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var stylelint = require("stylelint");
var reporter = require("postcss-reporter");

// PostCSS plugins

var plugins = [
  require('autoprefixer')(),
  require('cssnext')(),
  require('precss')()
];

// Paths

var source = 'source/';
var output = 'output/';

// Compile styles

gulp.task('styles', function () {
  return gulp.src(source + 'app.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest(output))
    // .pipe(postcss([
    //   stylelint({}),
    //   reporter({}),
    //   ]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest(output));
});

// Watch styles

gulp.task('watch', function () {
  gulp.watch(source + '**/*.css', ['styles']);
});
