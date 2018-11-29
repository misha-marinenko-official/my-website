'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function () {
  return gulp.src([
      './app/src/js/**/*.js',
      '!app/src/js/utils/noiseUtil.js',
      '!app/src/js/polyfills/**.js'
    ])
    .pipe(jshint({node: true, browser: true, "asi": true, trailingcomma: false}))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});