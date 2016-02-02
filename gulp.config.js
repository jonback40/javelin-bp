module.exports = function() {
    // Paths
    var root = './';
    var temp = root + '.tmp/';
    var nodeModules = root + 'node_modules/';
    var build = root + 'build/';
    var source = root + 'src/';
    
    
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
        styles: 'css/**/*.{css,less}',
        scripts: 'js/**/*.js',
        images: 'images/**/*.{jpg,jpeg,gif,png,svg}',
        templates: '*.html',
        
        // Acceptable File Types (markup, styles, scripts, images, fonts)
        acceptedTypes: '**/*.{html,css,less,js,jpg,jpeg,gif,ico,png,svg,eot,ttf,woff,woff2}',
        
        // Plugins
        inject: inject
    };
    
    return config;
};