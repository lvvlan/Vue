/**
 * Des
 * Created by luowei5 on 2016/12/8.
 * E-mail luowei5@jd.com
 * Update 2016/12/8
 */
require('eventsource-polyfill');

const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true');

hotClient.subscribe(function (event){
    if(event.action === 'reload'){
        window.location.reload();
    }
});