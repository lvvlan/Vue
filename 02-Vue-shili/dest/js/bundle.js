/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Des
	 * Created by luowei5 on 2016/11/29.
	 * E-mail luowei5@jd.com
	 * Update 2016/11/29
	 */

	//属性与方法
	var data = { a: 5 };
	var vm = new Vue({
	    el: '#test',
	    data: data
	});

	var iWatch = 0;
	/**
	 * $watch方法
	 * 1. 该方法要放在监听对象改变之前
	 * 2. 不能在回调函数中用箭头函数
	 * */
	vm.$watch('a', function () {
	    //这个回调将会在 vm.a 改变后调用
	    iWatch++;
	    console.log('vm.a\u5DF2\u88AB\u66F4\u6539\u4E86' + iWatch + '\u6B21!');
	});

	console.log(vm.a === data.a); //true
	//改变原始数据会影响属性
	data.a = 12;
	console.log('\u6539\u53D8\u539F\u59CB\u6570\u636E\u4F1A\u5F71\u54CD\u5C5E\u6027vm.a: ' + vm.a); //12
	//改变属性会影响原始数据
	vm.a = 7;
	console.log('\u6539\u53D8\u5C5E\u6027\u4F1A\u5F71\u54CD\u539F\u59CB\u6570\u636Edata.a: ' + data.a); //7

	//Vue对外暴露的一些属性与方法（都带有前缀$）
	console.log('vm.$data === data => ' + (vm.$data === data));
	console.log('vm.$el === document.getElementById(\'test\') => ' + (vm.$el === document.getElementById('test')));

	/**
	 * computed 与 method 区别
	 * computed依赖缓存，就是说如果他的依赖没有发生改变 那么多次取值会返回之前已经计算过的结果
	 * 如果不希望有缓存 用method代替
	 * */
	var app = new Vue({
	    el: '#app',
	    data: {
	        message: 'hello world!',
	        testWatch: 'watcher~~~'
	    },
	    computed: {
	        reverseMessage: function reverseMessage() {
	            return this.message.split('').reverse().join('');
	        }
	    },
	    watch: {
	        message: function message() {
	            console.log('message已被更改');
	        },
	        testWatch: function testWatch() {
	            console.log('testWatch已被更改');
	        }
	    }
	});

	app.message = 'hello world!';
	app.testWatch = 'hi~~~';

/***/ }
/******/ ]);