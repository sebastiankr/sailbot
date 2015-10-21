var gulp = require('gulp');

gulp.task('setWatch', function() {
  global.isWatching = true; // used in browserify.js
});
