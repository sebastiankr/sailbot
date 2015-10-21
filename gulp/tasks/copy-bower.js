var gulp = require('gulp');
var config = require('../config');

gulp.task('copy-bower', function () {
  var app = gulp.src([
    'bower_components/webcomponentsjs/webcomponents-lite.js'
  ], {
      dot: true
    }).pipe(gulp.dest(config.dest + '/js'));
});