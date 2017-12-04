var config = {
    entry: './browser/react/index.js', // entry point
    output: {
        path: __dirname,
        filename: 'index.js', // place where bundled app will be served
    },
    context: __dirname,
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /jsx?$/,  
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }]
    }
};

module.exports = config;