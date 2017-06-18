var path = require('path');

module.exports = {
    entry: [
        './js/index.js'
    ],
    output: {
        path: path.resolve(__dirname, './js/dist/'),
        publicPath: 'js/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
}