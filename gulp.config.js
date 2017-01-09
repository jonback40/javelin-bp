'use strict';


module.exports = () => {
    // Version
    let version = '1.0.0';
    
    
    // Paths
    let root = './';
    let temp = root + '.tmp/';
    let nodeModules = root + 'node_modules/';
    let build = root + 'build/';
    let src = root + 'src/';
    let publicScripts = root + 'public/scripts/';
    
    
    // Inject Plugin
    let inject = {
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
    let prompt = {
         inputs: [
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
                    'less.nav-toggle.js',
                    'less.scrollto.js',
                    'less.search-collapse.js',
                    'less.simplemodal-video.js',
                    'jquery.javelin.js',
                    'jquery.cycle2.js'
                ]
            }
        ],
        
        inputsMap: {
            'less.canvas-panels.js':        publicScripts + 'less/less.canvas-panels.min.js',
            'less.dropdown.js':             publicScripts + 'less/less.dropdown.min.js',
            'less.nav-toggle.js':           publicScripts + 'less/less.nav-toggle.min.js',
            'less.scrollto.js':             publicScripts + 'less/less.scrollto.min.js',
            'less.search-collapse.js':      publicScripts + 'less/less.search-collapse.min.js',
            'less.simplemodal-video.js':    publicScripts + 'less/less.simplemodal-video.min.js',
            'jquery.javelin.js':            publicScripts + 'jquery/javelin.jquery.js',
            'jquery.cycle2.js':             publicScripts + 'jquery/javelin.cycle2.js'
        }
    };
    
    
    // Config
    let config = {
         // Version
        version: version,
        
        // Paths
        root: root,
        temp: temp,
        nodeModules: nodeModules,
        build: build,
        src: src,
        publicScripts: publicScripts,
        
        // Globs
        styles: 'css/*.css',
        scripts: 'js/*.js',
        images: 'images/**/*.{jpg,jpeg,gif,png,svg}',
        templates: '*.html',
        
        // Acceptable File Types (markup, styles, scripts, images, fonts)
        acceptedTypes: '**/*.{html,css,less,js,jpg,jpeg,gif,ico,png,svg,eot,ttf,woff,woff2}',
        
        // Plugin Configurations
        inject: inject,
        prompt: prompt
    };
    
    
    return config;
};