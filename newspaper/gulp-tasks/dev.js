var gulp = require('gulp');

//gulp.task('build', ['copy:bower', 'build:js', 'build:scss', 'build:img', 'copy:fonts', 'build:html', 'copy:apiMock']);

gulp.task('dev', ['build:sprite', 'build:html', 'build:stylus', 'build:image'], function () {
    return gulp.start('watch:app-stylus', 'watch:app-image', 'watch:app-sprite', 'watch:app-html', 'webserver:dev');
});
