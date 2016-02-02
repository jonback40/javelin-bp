module.exports = function() {
    // Paths
    var root = './';
    var temp = root + '.tmp/';
    var nodeModules = root + 'node_modules/';
    var build = root + 'build/';
    var source = root + 'src/';
    
    
    // Styles
    var styles = [
        source + 'css/*.{css,less}'
    ];
    
    
    // Scripts
    var scripts = [
        source + 'js/*.js'
    ];
    
    
    // HTML Templates
    var templates = [
        source + '*.html'
    ];
    
    
    // Inject
    var inject = {
        options: {
            addRootSlash: false,
            ignorePath: 'build/',
            removeTags: true
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
        
        // Globs
        styles: styles,
        scripts: scripts,
        templates: templates,
        
        // Acceptable File Types (markup, styles, scripts, images, fonts)
        acceptedTypes: '**/*.{html,css,less,js,jpg,jpeg,gif,ico,png,svg,eot,ttf,woff,woff2}',
        
        // Plugins
        inject: inject
    };
    
    return config;
};