var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({ lazy: true });
var del = require('del');


// Default (Help Task)
gulp.task('help', $.taskListing);
gulp.task('default', buildPrompt);


// Tasks
gulp.task('build', ['default', 'clean', 'templates']);
gulp.task('clean', ['default'], cleanTask);
gulp.task('templates', ['default', 'clean'], templatesTask);


// Vars
var params;
var inputs = [
	{
		type: 'checkbox',
		name: 'type',
		message: 'Which type of site are you generating?',
		choices: ['desktop (default)', 'mobile', 'responsive']
	},
	{
		type: 'input',
		name: 'site',
		message: 'Javelin site shortname'
	},
	{
		type: 'input',
		name: 'title',
		message: 'Project title (or company name)'
	},
	{
		type: 'input',
		name: 'author',
		message: 'Author (first and last name)'
	}
];


// ----------------------------------------------------------------------------------------------------


// Before we start the build process, prompt the user to provide some input
function buildPrompt() {
	return gulp.src(config.root)
		.pipe($.prompt.prompt(inputs, saveResponse));
	
	function saveResponse(response) {
		if (response.type[0] === 'desktop (default)') {
			response.type[0] = 'default';
		}
		
		params = response;
	}
}


// Clean out the build directory before we start another build process
function cleanTask() {
	return del(config.build);
}


// Put HTML Templates into the build directory
function templatesTask() {
	return gulp.src(config.source + params.type + '/' + config.acceptedTypes)
        .pipe(gulp.dest(config.build + '/' + params.type));
}
