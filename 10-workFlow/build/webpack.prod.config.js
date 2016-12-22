/**
 * Des
 * Created by luowei5 on 2016/12/13.
 * E-mail luowei5@jd.com
 * Update 2016/12/13
 */
const path = require('path');
const config = require('../config');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = config.build.env;

var webpackConfig = merge(baseWebpackConfig, {
    output: {
        path: config.assetsRoot,
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js'
    }
});