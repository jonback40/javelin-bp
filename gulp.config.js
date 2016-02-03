module.exports = function() {
    // Paths
    var root = './';
    var temp = root + '.tmp/';
    var nodeModules = root + 'node_modules/';
    var build = root + 'build/';
    var source = root + 'src/';
    
    
    // Inject Plugin
    var inject = {
        options: {
            addRootSlash: false,
            ignorePath: 'build/',
            removeTags: true
        }
    };
    
    
    // Prompt Plugin
    var prompt = {
	    inputs: [
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
			},
			{
				type: 'checkbox',
				name: 'libs',
				message: 'Which built-in libraries do you want to include, if any?',
				choices: [
					'less.canvas-panels.js',
					'less.dropdown.js',
					'less.scrollto.js',
					'less.search.js',
					'less.simplemodal-video.js'
				]
			},
			{
				type: 'checkbox',
				name: 'scripts',
				message: 'Which local scripts do you want to include, if any?',
				choices: [
					'common.js',
					'index.js'
				]
			}
		]
	};
    
    
    // Config
    var config = {
        // Paths
        root: root,
        temp: temp,
        nodeModules: nodeModules,
        build: build,
        source: source,
        
        // Globs
        styles: 'css/**/*.{css,less}',
        scripts: 'js/**/*.js',
        images: 'images/**/*.{jpg,jpeg,gif,png,svg}',
        templates: '*.html',
        
        // Acceptable File Types (markup, styles, scripts, images, fonts)
        acceptedTypes: '**/*.{html,css,less,js,jpg,jpeg,gif,ico,png,svg,eot,ttf,woff,woff2}',
        
        // Plugins
        inject: inject,
        prompt: prompt
    };
    
    return config;
};