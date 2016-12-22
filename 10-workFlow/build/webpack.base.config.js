/**
 * Des
 * Created by luowei5 on 2016/12/7.
 * E-mail luowei5@jd.com
 * Update 2016/12/7
 */
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//console.log(`output.path: ${config.assetsRoot}`);
module.exports = {
    entry: {
        app: './src/js/index.js'
    },
    output: {
        path: config.assetsRoot,
        filename: 'js/[name].js'/*,
        publicPath: '/abc'*/
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css", "postcss")},
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    babel: {
        presets: ['es2015', 'stage-2'],
        plugins: ['transform-runtime']
    }/*,
    vue: {
        loaders: {
            css: 'vue-style-loader!css-loader'
        }
    }*/,
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('css')
        },
        postcss: [
            require('autoprefixer')({
                browsers: ['last 3 versions']
            })
        ]
    },
    postcss: [
        require('autoprefixer')({
            browsers: ['last 3 versions']
        })
    ]
};