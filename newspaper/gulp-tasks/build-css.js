var gulp = require('gulp'),
$ = require('gulp-load-plugins')({
  rename: {
	'gulp-less-sourcemap': 'less',
	'gulp-rimraf': 'rimraf',
	'gulp-angular-filesort': 'angularFilesort'
  }
}),
	config = require('./config');



gulp.task('build:less', function () {
  gulp.src(config.PATH.src.client + '/**/*.less')
	  .pipe($.less())
	  .pipe($.sourcemaps.init())
	  .pipe($.concat(config.bowerJson.moduleName + '-' + config.bowerJson.version + '.css'))
	  .pipe(config.isProduction ? $.minifyCss({sourceMaps: false}) : $.util.noop())
	  .pipe($.sourcemaps.write())
	  .pipe(gulp.dest(config.PATH.dist.app));
});

gulp.task('build:stylus', function () {
  gulp.src(config.PATH.src.client + '/**/*.styl')
	  .pipe($.stylus())
	  .pipe($.sourcemaps.init())
	  .pipe($.concat(config.bowerJson.moduleName + '-' + config.bowerJson.version + '.css'))
	  .pipe(config.isProduction ? $.minifyCss({sourceMaps: false}) : $.util.noop())
	  .pipe($.sourcemaps.write())
	  .pipe(gulp.dest(config.PATH.dist.app));
});