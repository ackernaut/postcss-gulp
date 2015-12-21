
// Require

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    minifycss    = require('gulp-minify-css'),
    rename       = require('gulp-rename'),
    stylelint = require("stylelint"),
    reporter = require("postcss-reporter");

// PostCSS plugins

var plugins = [
  require('autoprefixer')(),
  require('cssnext')(),
  require('precss')()
];

// Paths

var source = 'src/styles/';
var output = 'dist/styles/';

// Compile styles

gulp.task('styles', function () {
  return gulp.src(source + 'app.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest(output))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest(output));
});

// Watch styles

gulp.task('watch', function () {
  gulp.watch(source + '**/*.css', ['styles']);
});
