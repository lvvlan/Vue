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
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['stage-2', 'es2015'],
                    plugins: [
                        'transform-runtime'
                    ]
                }
            }
        ]
    },
    babel: {
        presets: ['es2015', 'stage-2'],
        plugins: ['transform-runtime']
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
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: false,
        port: 3009,
        host: "localhost"
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
};