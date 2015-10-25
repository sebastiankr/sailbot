/*
  gulpfile.js
  ===========
*/
var gulp = require('gulp');
var del = require('del');
var config = require('./gulp/config');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true }); // Require all tasks in gulp/tasks, including subfolders


gulp.task('build', function(callback) {
  runSequence(['copy-static-assets', 'copy-bower', 'vulcanize'],
              'browserify',
              callback);
});

gulp.task('default', function(callback) {
  runSequence('build',
              ['setWatch', 'browserSync'],
              'watch',
              callback);
});

gulp.task('watch', function(callback) {
  gulp.watch(config.src +'/app/**/*', ['browserify']);
  gulp.watch(config.static_src, ['copy-static-assets']);
  gulp.watch(config.src +'/app/elements/**', ['vulcanize']);
});

gulp.task('clean', function(callback) {
    return del([config.dest], callback);
});

gulp.task('dist-clean', function () {
	return del([config.dest,'./bower_components', 'node_modules']).then(function (paths) {
		console.log('Deleted files/folders:\n', paths.join('\n'));
	});
});