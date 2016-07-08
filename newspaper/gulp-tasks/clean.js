"use strict";
var gulp = require('gulp'),
	$ = require('gulp-load-plugins')({
	  rename: {
		'gulp-less-sourcemap': 'less',
		'gulp-rimraf': 'rimraf',
		'gulp-angular-filesort': 'angularFilesort'
	  }
	}),
	config = require('./config');

gulp.task("clean", function () {

  return gulp.src(config.PATH.dist, {read: false}).pipe($.rimraf({force: true}));
});