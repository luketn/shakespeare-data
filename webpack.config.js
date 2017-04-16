const {resolve} = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    return {
        entry: './src/index.ts',
        devtool: 'source-map',
        output: {
            path: resolve(__dirname, './dist'),
            libraryTarget: 'umd',
            filename: 'index.js'
        },
        resolve: {
            extensions: ['.ts','.js']
        },
        module: {
            rules: [
                {test: /\.ts$/, loader: 'awesome-typescript-loader'},
                {enforce: "pre", test: /\.js$/, loader: 'source-map-loader'}
            ]
        },
        devServer: {
            contentBase: "./"
        },
        plugins: [new HtmlWebpackPlugin({
            title: "Shakespeare's Sonnets!",
            template: './example/index.html.ejs'
        })]
    }
};