var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    fileInclude = require('gulp-file-include'),
    del = require('del'),
	config = require('./config');
    errorDebug = require('./lib/error-debug');

//gulp.task('build:html', ['build:html:pages', 'build:html:markup']);
gulp.task('build:html', ['build:html:pages']);

gulp.task('build:html:pages', function() {
  gulp.src(['client/index.html'])
	  .pipe(fileInclude({
		prefix: '@@',
		basepath: '@file'
	  }))
	  .pipe(gulp.dest('./dist'));
});
