var urlLib = require('url');
var queryString = require('querystring');
var EventEmitter = require('events').EventEmitter;
var E = new EventEmitter();

var url = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=s&rsv_pq=f84897f80004e683&rsv_t=d35eUqI2gmDSvTdIANUBwEsBQbxjpmiDhff%2FMWzfBN0dza8swXDIWfMX5lo&rqlang=cn&rsv_enter=1&rsv_sug3=2&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&inputT=405&rsv_sug4=406';

var str = 'a=1&b=2';
var jsonStr='{"c":3, "d":4}';

$('#btn').on('click', function () {
    E.emit('urlLib', url);
    E.emit('queryString', str);
    E.emit('JSONparse', jsonStr);
});

E.on('urlLib', function (url){
    console.log('urlLib.parse', urlLib.parse(url, true));
});

E.on('queryString', function (str){
    console.log('queryString.parse', queryString.parse(str));
});

E.on('JSONparse', function (str){
    console.log('JSON.parse', JSON.parse(str));
});
