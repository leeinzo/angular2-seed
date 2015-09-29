'use strict';

/*
 * gulpfile.js
 * ===========
 * Rather than manage one giant configuration file responsible
 * for creating multiple tasks, each task has been broken out into
 * its own file in the 'gulp/tasks' folder. Any files in that directory get
 * automatically required below.
 *
 * To add a new task, simply add a new task file in that directory.
 */

var gulp = require('gulp');
var requireDir = require('require-dir');

// Specify paths & globbing patterns for tasks.
// TODO

// Require all tasks in the 'gulp/tasks', including subfolders.
requireDir('./gulp/tasks', { recurse: true });

// Default task; start local server & watch for changes.
gulp.task('default', ['lint', 'jspm']);