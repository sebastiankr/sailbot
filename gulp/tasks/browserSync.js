var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config');
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('browserSync', ['build'], function () {
  browserSync.init({
    server: {
      baseDir: [config.dest, config.src],
      middleware: [ historyApiFallback() ]
    },
    port: 5000,
    ui: {
      port: 5001
    },
    files: [
      config.dest + '/**'
    ]
  });
});
