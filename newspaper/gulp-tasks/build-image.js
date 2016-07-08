var gulp = require('gulp');
//build image file
//Now it just copy
gulp.task('build:image', function () {
  var imgSrc = './client/assets/img/**/*.png',
	  imgDst = './dist/assets/img/';

  gulp.src(imgSrc)
	  .pipe(gulp.dest(imgDst));
});
