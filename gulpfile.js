'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('src/tsconfig.json', {
    typescript: require('typescript')
});

// compile-ts
gulp.task('compile-ts', function () {
    var tsResult = gulp.src('src/**/*')
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('build'));
});
