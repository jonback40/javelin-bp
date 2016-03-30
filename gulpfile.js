var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({ lazy: true });
var del = require('del');


// Default (Help Task)
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);


// Tasks
gulp.task('prompt', ['clean'], buildPrompt);
gulp.task('build', ['prompt', 'templates', 'interpolateTemplates', 'interpolateLess', 'inject']);
gulp.task('clean', cleanTask);
gulp.task('templates', ['prompt'], templatesTask);
gulp.task('interpolateTemplates', ['templates'], interpolateTemplatesTask);
gulp.task('interpolateLess', ['templates'], interpolateLessTask);
gulp.task('inject', ['interpolateTemplates'], injectTask);


// Vars
var params;


// ----------------------------------------------------------------------------------------------------


// Before we start the build process, prompt the user to provide some input
function buildPrompt() {
    return gulp.src(config.root)
        .pipe($.prompt.prompt(config.prompt.inputs, saveResponse));
    
    function saveResponse(response) {
        // Go through each response property (they're either a string or array)
        // ...if string, find matching key and replace with corresponding value
        // ...if array,  loop through list, find matching key and replace with corresponding value
        for (var prop in response) {
            if (response.hasOwnProperty(prop)) {
                var value = response[prop],
                    len = value.length;
                
                if (Array.isArray(value)) {
                    for (var i = 0; i < len; i++) {
                        response[prop][i] = getMappedParam(value[i]);
                    }
                } else {
                    response[prop] = getMappedParam(value);
                }
            }
        }
        
        response.date = dateString();
        
        params = response;
    }
}


// Clean out the build directory before we start another build process
function cleanTask() {
    return del(config.build);
}


// Inject dependencies into the HTML template files
function injectTask() {
    var src = gulp.src(config.build + '/' + params.type + '/' + config.templates);
    
    // Inject styles
    src.pipe($.inject(
        gulp.src(config.build + '/' + params.type + '/' + config.styles, { read: false }),
        config.inject.options
    ))
    
    // Inject public script libraries (if selected) and local scripts
	params.libs.push(config.source + params.type + '/' + config.scripts);
	
    src.pipe($.inject(
        gulp.src(params.libs, { read: false }),
        config.inject.options
    ));
    
    return src.pipe(gulp.dest(config.build + '/' + params.type));
}


// Interpolate input data into the HTML template files
function interpolateTemplatesTask() {
    var src = gulp.src(config.build + '/' + params.type + '/' + config.templates);
    
    return interpolate(src)
    	.pipe(gulp.dest(config.build + '/' + params.type));
}


// Interpolate input data into the LESS files (compiler and config)
function interpolateLessTask() {
    var src = gulp.src([
        config.build + '/' + params.type + '/css/less/compiler.less',
        config.build + '/' + params.type + '/css/less/config.less'
    ]);
    
    return interpolate(src)
    	.pipe(gulp.dest(config.build + '/' + params.type + '/css/less/'));
}


// Put HTML Templates into the build directory
function templatesTask() {
    return gulp.src(config.source + params.type + '/' + config.acceptedTypes)
        .pipe(gulp.dest(config.build + '/' + params.type));
}


// ----------------------------------------------------------------------------------------------------


// Return the current month and year in a readable, string format
function dateString() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var date = new Date();
    
    return months[date.getMonth()] + ' ' + date.getFullYear();
}


// Return the param value from the 'inputsMap' in the config file or return the original 'param' if no match is found
// This allows us to manage checkboxes with different labels and values.
function getMappedParam(param) {
	var value = config.prompt.inputsMap[param];
	
	return value === undefined ? param : value;
}


// Interpolate our 'params' data into a file stream
function interpolate(src) {
    return src
        .pipe($.replace(/\{\{SITE\}\}/g, params.site))
        .pipe($.replace(/\{\{TITLE\}\}/g, params.title))
        .pipe($.replace(/\{\{AUTHOR\}\}/g, params.author))
        .pipe($.replace(/\{\{DATE\}\}/g, params.date));
}