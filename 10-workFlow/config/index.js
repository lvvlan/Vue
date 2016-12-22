/**
 * Des
 * Created by luowei5 on 2016/12/7.
 * E-mail luowei5@jd.com
 * Update 2016/12/7
 */
var path = require('path');

module.exports = {
    assetsRoot: path.resolve(__dirname, '../dest'),
    build: {    //production
        env: require('./prod.config'),
        assetsPublicPath: '/'
    },
    dev: {  //development
        env: require('./dev.config'),
        port: 8081,
        assetsPublicPath: '/'
    }
};