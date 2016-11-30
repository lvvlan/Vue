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
	        message: 'Hello Vue!'
	    }
	});

	var app2 = new Vue({
	    el: '#app2',
	    data: {
	        message: 'somethings show~~~'
	    }
	});

	var app3 = new Vue({
	    el: '#app3',
	    data: {
	        seen: true
	    }
	});

	var app4 = new Vue({
	    el: '#app4',
	    data: {
	        arr: [{ text: 'Lean JS' }, { text: 'Lean Vue' }, { text: 'Lean React' }]
	    }
	});

	app4.arr.push({ text: 'this one' });

	var app5 = new Vue({
	    el: '#app5',
	    data: {
	        message: 'Hello World!'
	    },
	    methods: {
	        reverseMessage: function reverseMessage() {
	            this.message = this.message.split('').reverse().join('');
	        }
	    }
	});

	var app6 = new Vue({
	    el: '#app6',
	    data: {
	        message: 'hello world!'
	    }
	});

	Vue.component('todo-item', {
	    props: ['arr'],
	    template: '<li>{{arr.text}}</li>'
	});

	var app7 = new Vue({
	    el: '#app7',
	    data: {
	        groceryList: [{ text: 'abc' }, { text: 'xyz' }, { text: 123 }]
	    }
	});

/***/ }
/******/ ]);