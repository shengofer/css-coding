var gulp = require('gulp');

//gulp.task('build', ['copy:bower', 'build:js', 'build:scss', 'build:img', 'copy:fonts', 'build:html', 'copy:apiMock']);

gulp.task('build', ['build:sprite', 'build:html', 'build:stylus', 'build:image']);
