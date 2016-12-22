/**
 * Des
 * Created by luowei5 on 2016/12/8.
 * E-mail luowei5@jd.com
 * Update 2016/12/8
 */
require('./check-versions')();

const config = require('../config');
//if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const opn = require('opn');
//const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('./webpack.dev.config');

var port = process.env.PORT || config.dev.port;

const app = express();
const compiler = webpack(webpackConfig);

//app.use(require('connect-history-api-fallback')());

// app.use(express.static(path.join(__dirname, '../src/html')));

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: '/',
    stats: {
        color: true,
        chunks: false
    }
});
const hotMiddleware = require('webpack-hot-middleware')(compiler);

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation){
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb){
        hotMiddleware.publish({action: 'reload'});
        cb();
    });
});

app.use(devMiddleware);

app.use(hotMiddleware);

//var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use('/static', express.static('./assets'));

module.exports = app.listen(port, function (err) {
    if(err){
        console.log(err);
        return false;
    }
    var url = 'http://localhost:' + port;
    console.log(`Listening at ${url} \n`);

    opn(url);
});