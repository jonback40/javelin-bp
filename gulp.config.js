'use strict';


module.exports = () => {
    // Version
    const version = '1.0.0';
    
    
    // Paths
    const root = './';
    const temp = root + `${root}.tmp/`;
    const nodeModules = `${root}node_modules/`;
    const build = `${root}build/`;
    const src = `${root}src/`;
    const publicScripts = `${root}public/scripts/`;
    
    
    // Inject plugin config
    const inject = {
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
    
    
    // Prompt plugin config
    const prompt = {
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
                    'less.svg-replace.js',
                    'jquery.javelin.js',
                    'jquery.cycle2.js'
                ]
            }
        ],
        
        inputsMap: {
            'less.canvas-panels.js':        `${publicScripts}less/less.canvas-panels.min.js`,
            'less.dropdown.js':             `${publicScripts}less/less.dropdown.min.js`,
            'less.nav-toggle.js':           `${publicScripts}less/less.nav-toggle.min.js`,
            'less.scrollto.js':             `${publicScripts}less/less.scrollto.min.js`,
            'less.search-collapse.js':      `${publicScripts}less/less.search-collapse.min.js`,
            'less.simplemodal-video.js':    `${publicScripts}less/less.simplemodal-video.min.js`,
            'less.svg-replace.js':          `${publicScripts}less/less.svg-replace.min.js`,
            'jquery.javelin.js':            `${publicScripts}jquery/javelin.jquery.js`,
            'jquery.cycle2.js':             `${publicScripts}jquery/javelin.cycle2.js`
        }
    };
    
    
    // Config
    const config = {
         // Version
        version,
        
        // Paths
        root,
        temp,
        nodeModules,
        build,
        src,
        publicScripts,
        
        // Globs
        styles: 'css/*.css',
        scripts: 'js/*.js',
        images: 'images/**/*.{jpg,jpeg,gif,png,svg}',
        templates: '*.html',
        
        // Acceptable File Types (markup, styles, scripts, images, fonts)
        acceptedTypes: '**/*.{html,css,less,js,jpg,jpeg,gif,ico,png,svg,eot,ttf,woff,woff2}',
        
        // Plugin Configurations
        inject,
        prompt
    };
    
    
    return config;
};