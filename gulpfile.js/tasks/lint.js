'use strict';

var gulp = require('gulp'),
    tslint = require('gulp-tslint');

gulp.task('ts-lint', function(){
      return gulp.src('./src/app/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

// Lint everything
gulp.task('lint', ['ts-lint']);