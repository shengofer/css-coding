"use strict";
var gulp = require('gulp'),
	$ = require('gulp-load-plugins')({
	  rename: {
		'gulp-less-sourcemap': 'less',
		'gulp-rimraf': 'rimraf',
		'gulp-angular-filesort': 'angularFilesort'
	  }
	}),
	path = require('path'),
	config = require('./config');


// ---
// --- App:Watch
// ---

gulp.task('app:watch', function () {
  var scriptFiles = path.join(config.app, '**/*.js');
  var templateFiles = path.join(config.app, '**/*.html');
  var testFiles = path.join(config.test, '**/*.js');
  var styleFiles = path.join(config.app, '**/*.less');

});


gulp.task('watch:app-less', function () {
  var watcher = gulp.watch([config.PATH.src.client + '/**/*.less'], ['build:less']);
  watcher.on('change', onWatcherChange);
});


gulp.task('watch:app-stylus', function () {
  var watcher = gulp.watch([config.PATH.src.client + '/**/*.styl'], ['build:stylus']);
  watcher.on('change', onWatcherChange);
});

gulp.task('watch:app-image', function () {
  var watcher = gulp.watch([config.PATH.src.client + 'assets/img/**/*.png'], ['build:image']);
  watcher.on('change', onWatcherChange);
});

gulp.task('watch:app-html', function () {
  var watcher = gulp.watch([config.PATH.src.client + '**/*.html'], ['build:html']);
  watcher.on('change', onWatcherChange);
});

gulp.task('watch:app-sprite', function () {
  var watcher = gulp.watch([config.PATH.src.client + 'assets/images/sprite/**/*.png'], ['build:sprite,build:stylus']);
  watcher.on('change', onWatcherChange);
});

function onWatcherChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}