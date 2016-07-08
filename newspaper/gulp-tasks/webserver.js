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
gulp.task('webserver:dev', function () {
  var server = $.liveServer(['--harmony', 'app.js'], {env: {NODE_ENV: 'development'}});
  server.start();
});