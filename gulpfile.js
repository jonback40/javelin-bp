var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({ lazy: true });
var del = require('del');


// Default (Help Task)
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);


// Tasks
gulp.task('build', buildTask);
gulp.task('watch', watchTask);


// ----------------------------------------------------------------------------------------------------


// Build
function buildTask() {
    
}


// Watch for changes on files
function watchTask() {
    gulp.watch(config.client + '**/*', ['build']);
}