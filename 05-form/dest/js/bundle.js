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

	var app = new Vue({
	    el: '#app',
	    data: {
	        message: '输入多行文本'
	    }
	});

	var check = new Vue({
	    el: '#check',
	    data: {
	        checked: false,
	        checkNames: [],
	        a: '选中了!',
	        b: '未选中!'
	    }
	});

	var radio = new Vue({
	    el: '#radio',
	    data: {
	        picked: 'one'
	    }
	});

	var select = new Vue({
	    el: '#select',
	    data: {
	        select1: 'A',
	        select2: ['B']
	    }
	});

	var selectFor = new Vue({
	    el: '#selectFor',
	    data: {
	        selected: 'A',
	        options: [{ text: 'one', value: 'A' }, { text: 'two', value: 'B' }, { text: 'three', value: 'C' }]
	    }
	});

	/**
	 * 修饰符
	 * .lazy
	 * 
	 * */

/***/ }
/******/ ]);