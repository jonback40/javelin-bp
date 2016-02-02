var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({ lazy: true });
var del = require('del');


// Default (Help Task)
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);


// Tasks
gulp.task('build', ['clean', 'templates']);
gulp.task('clean', cleanTask);
gulp.task('templates', ['clean'], templatesTask);


// ----------------------------------------------------------------------------------------------------


// Clean out the build directory before we start another build process
function cleanTask() {
	return del(config.build);
}


// Put HTML Templates into the build directory
function templatesTask() {
	var dir = 'responsive';
	
	return gulp.src(config.source + dir)
        .pipe(gulp.dest(config.build));
}