module.exports = function() {
    // Paths
    var root = './';
    var temp = root + '.tmp/';
    var nodeModules = root + 'node_modules/';
    var build = root + 'build/';
    var source = root + 'src/';
    
    
    // Styles
    var styles = [
        source + '**/*.{css,less}'
    ];
    
    
    // Scripts
    var scripts = [
        source + '**/*.js'
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
        
        // Files
        styles: styles,
        scripts: scripts,
        templates: templates,
        
        // Plugin Options
        inject: inject
    };
    
    return config;
};