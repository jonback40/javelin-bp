module.exports = function() {
    // Version
    var version = '1.0.0';
    
    
    // Paths
    var root = './';
    var temp = root + '.tmp/';
    var nodeModules = root + 'node_modules/';
    var build = root + 'build/';
    var source = root + 'src/';
    var publicScripts = root + 'public/scripts/';
    
    
    // Inject Plugin
    var inject = {
        options: {
            addRootSlash: false,
            ignorePath: [
                'build/default/',
                'build/mobile/',
                'build/responsive/',
                'src/default/',
                'src/mobile/',
                'src/responsive/'
            ],
            removeTags: true
        }
    };
    
    
    // Prompt Plugin
    var prompt = {
         inputs: [
            {
                type: 'list',
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
                    'less.canvas-panels.js',
                    'less.dropdown.js',
                    'less.scrollto.js',
                    'less.search.js',
                    'less.simplemodal-video.js',
                    'jquery.javelin.js',
                    'jquery.cycle2.js'
                ]
            }
        ],
        
        inputsMap: {
            'desktop (default)':            'default',
            'mobile':                       'mobile',
            'responsive':                   'responsive',
            
            'less.canvas-panels.js':        publicScripts + 'less/less.canvas-panels.min.js',
            'less.dropdown.js':             publicScripts + 'less/less.dropdown.min.js',
            'less.scrollto.js':             publicScripts + 'less/less.scrollto.min.js',
            'less.search.js':               publicScripts + 'less/less.search.min.js',
            'less.simplemodal-video.js':    publicScripts + 'less/less.simplemodal-video.min.js',
            'jquery.javelin.js':            publicScripts + 'jquery/javelin.jquery.js',
            'jquery.cycle2.js':             publicScripts + 'jquery/javelin.cycle2.js'
        }
    };
    
    
    // Config
    var config = {
	    version: version,
	    
        // Paths
        root: root,
        temp: temp,
        nodeModules: nodeModules,
        build: build,
        source: source,
        publicScripts: publicScripts,
        
        // Globs
        styles: 'css/*.css',
        scripts: 'js/*.js',
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