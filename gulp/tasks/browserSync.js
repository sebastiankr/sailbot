var gulp = require('gulp');
var browserSync = require('browser-sync').create();;
var config = require('../config');

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: "./build"
    },
    port: 5000,
    ui: {
      port: 5001
    }
  });
});
