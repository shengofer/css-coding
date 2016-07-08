var gulp = require('gulp'),
	spritesmith = require('gulp.spritesmith');

gulp.task('build:sprite', function () {
  var spriteData =
	  gulp.src('./client/assets/images/sprite/*.*') // путь, откуда берем картинки для спрайта
		  .pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.styl',
			cssFormat: 'stylus',
			algorithm: 'binary-tree',
			cssTemplate: 'stylus.template.mustache',
			cssVarMap: function (sprite) {
			  sprite.name = 's-' + sprite.name
			}
		  }));

  spriteData.img.pipe(gulp.dest('./dist/assets/images/')); // путь, куда сохраняем картинку
  spriteData.css.pipe(gulp.dest('./client/components/')); // путь, куда сохраняем стили
});