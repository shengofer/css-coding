var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var fileinclude = require('gulp-file-include');


gulp.task('scss', function () {
  return gulp.src('./src/**/*.scss')
	  .pipe(sass())
	  .pipe(concat('main.css'))
	  .pipe(gulp.dest('dist/'));
});


gulp.task('watch-scss', function () {
  return watch('./src/**/*.scss', function () {
	gulp.start('scss');
  })
});


gulp.task('watch-html', function () {
  return watch('./src/**/*.html', function () {
	gulp.start('html-file-include');
  })
});

gulp.task('serve', ['build'], function() {

  browserSync.init(["./*.html",'./dist/**/*.css'],{
	server: "./"
  });

  gulp.start('watch');
});

gulp.task('html-file-include', function() {
  gulp.src(['./src/index.html'])
	  .pipe(fileinclude({
		prefix: '@@',
		basepath: '@file'
	  }))
	  .pipe(gulp.dest('./'));
});

gulp.task('build',['html-file-include','scss']);
gulp.task('watch',['build','watch-scss','watch-html'] );

gulp.task('default',['serve']);
