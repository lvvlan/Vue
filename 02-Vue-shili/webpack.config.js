const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/js/index.js'
    },
    output: {
        path: './dest',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: [/*'react', */'es2015'],
                    plugins: [
                        'transform-runtime'
                    ]
                }
            }
        ]
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     React: 'react',
        //     RD: 'react-dom'
        // }),
        new HtmlWebpackPlugin({
            template: "src/html/index.html",
            filename: "html/index.html"
        }),
        new ExtractTextPlugin("css/[name].css")
    ],
    watch: true
};