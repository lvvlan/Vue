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

	/**
	 * 1. is 用于指定HTML标签（如ul里只能放li而不能直接放Vue组件）里放Vue的组件
	 * 2. $emit的事件名只能小写 不支持驼峰命名
	 * 3. props的对应 看你外面的模版定义对应 :title='somethings'
	 * */

	//Vue组件
	Vue.component('todo-list', {
	    template: '<li>{{title}}  <button @click="$emit(\'remove\')">X</button></li>',
	    props: ['title']
	});

	//Vue实例
	var app = new Vue({
	    el: '#app',
	    data: {
	        newTodoText: '',
	        todos: ['abc', 'xyz', 123]
	    },
	    methods: {
	        addNewTodo: function addNewTodo() {
	            this.todos.push(this.newTodoText);
	            this.newTodoText = '';
	        }
	    }
	});

	//显示过滤/排序结果
	var arr = new Vue({
	    el: '#arr',
	    data: {
	        numbers: [1, 2, 3, 4, 5, 6, 7, 8]
	    },
	    computed: {
	        evenNumbers: function evenNumbers() {
	            return this.numbers.filter(function (n) {
	                return n % 2 === 0;
	            });
	        }
	    }
	});

/***/ }
/******/ ]);