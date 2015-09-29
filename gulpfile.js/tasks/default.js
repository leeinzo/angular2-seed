'use strict';

var gulp = require('gulp'),
	gulpSequence = require('gulp-sequence');
	
gulp.task('default', 
	gulpSequence(['clean', 'lint'], ['javascript', 'html'])
);