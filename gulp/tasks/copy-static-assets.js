var gulp = require('gulp');
var config = require('../config');

gulp.task('copy-static-assets', function() {
  return gulp.src(config.static_src)
    .pipe(gulp.dest(config.dest));
});
