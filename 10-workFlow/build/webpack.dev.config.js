/**
 * Des
 * Created by luowei5 on 2016/12/8.
 * E-mail luowei5@jd.com
 * Update 2016/12/8
 */
const config = require('../config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

Object.keys(baseWebpackConfig.entry).forEach(function (name){
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

var test = merge(baseWebpackConfig, {
    devtool: '#cheap-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        //为每个模块分配ID
        new webpack.optimize.OccurenceOrderPlugin(),
        //模块热替换
        new webpack.HotModuleReplacementPlugin(),
        //用来跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
        new webpack.NoErrorsPlugin(),
        //提取CSS模块
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin({
            filename: 'demo.html',
            template: 'src/html/demo.html'
        })/*,
        new HtmlWebpackPlugin({
            filename: 'test.html',
            template: 'src/html/test.html'
        })*/
    ]
});

module.exports = test;