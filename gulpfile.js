/* global require */
var gulp = require('gulp'),
    dest = 'dist';

gulp.task('clean', clean);

function clean() {
    var del = require('del');
    del(dest, function() {
        del('test/**/*.js', cb);
    });
}