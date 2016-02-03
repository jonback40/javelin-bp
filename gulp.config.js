module.exports = function() {
	// Paths
	var root = './';
	var temp = root + '.tmp/';
	var nodeModules = root + 'node_modules/';
	var build = root + 'build/';
	var source = root + 'src/';
	var publicScripts = 'public/scripts/';
	
	
	// Inject Plugin
	var inject = {
		options: {
			addRootSlash: false,
			ignorePath: [
				'build/default/',
				'build/mobile/',
				'build/responsive/'
			],
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
				choices: [
					'desktop (default)',
					'mobile',
					'responsive'
				]
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
					'jquery.javelin.js',
					'less.canvas-panels.js',
					'less.dropdown.js',
					'less.parallax.js',
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
		],
		
		inputsMap: {
			'desktop (default)':			'default',
			'mobile':						'mobile',
			'responsive':					'responsive',
			
			'jquery.javelin.js':			publicScripts + 'jquery/javelin.jquery.js',
			'less.canvas-panels.js':		publicScripts + 'less/less.canvas-panels.min.js',
			'less.dropdown.js':				publicScripts + 'less/less.dropdown.min.js',
			'less.search.js':				publicScripts + 'less/less.search.min.js',
			'less.simplemodal-video.js':	publicScripts + 'less/less.simplemodal-video.min.js',
			
			'common.js':					'js/common.min.js',
			'index.js':						'js/index.min.js'
		}
	};
	
	
	// Config
	var config = {
		// Paths
		root: root,
		temp: temp,
		nodeModules: nodeModules,
		build: build,
		source: source,
		publicScripts: publicScripts,
		
		// Globs
		styles: 'css/**/*.css',
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