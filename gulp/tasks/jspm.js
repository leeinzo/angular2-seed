'use strict';

var gulp = require('gulp');
var jspm = require('jspm');

gulp.task('jspm', function() {
  return jspm.bundleSFX('app/bootstrap', 'dist/js/app.js', { sourceMaps: false, minify: true });
});