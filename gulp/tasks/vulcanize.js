var gulp = require('gulp');
var config = require('../config');
var polybuild = require('polybuild');

// Polybuild will take care of inlining HTML imports,
// scripts and CSS for you.
gulp.task('vulcanize', function () {
  return gulp.src('src/app/elements/elements.html')
    .pipe(polybuild({maximumCrush: true}))
    .pipe(gulp.dest(config.dest));
});