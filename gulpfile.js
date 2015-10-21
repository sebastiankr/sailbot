/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any files in that directory get
  automatically required below.
  To add a new task, simply add a new task file that directory.
  gulp/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/
var gulp = require('gulp');
var del = require('del');
var config = require('./gulp/config');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

requireDir('./gulp/tasks', { recurse: true }); // Require all tasks in gulp/tasks, including subfolders

gulp.task('build', function(callback) {
  runSequence('clean',
              ['copy-static-assets', 'copy-bower', 'vulcanize'],
              'browserify',
              callback);
});

gulp.task('default', ['watch']);

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch(config.src, ['copy-static-assets']);
});

gulp.task('watch', function(callback) {
  runSequence('build',
              ['setWatch', 'browserSync'],
              callback);
  gulp.watch(config.src +'/app/**/*', ['browserify']);
  gulp.watch(config.static_src, ['copy-static-assets']);
  gulp.watch(config.src +'/app/elements/**', ['vulcanize']);
  gulp.watch(config.dest + '/**/*').on('change', reload);
});

gulp.task('clean', function(callback) {
    return del([config.dest], callback);
});

gulp.task('dist-clean', function () {
	return del([config.dest,'./bower_components', 'node_modules']).then(function (paths) {
		console.log('Deleted files/folders:\n', paths.join('\n'));
	});
});