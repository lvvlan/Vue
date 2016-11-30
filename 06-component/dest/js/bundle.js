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
	 * component
	 * 1. data必须是函数
	 * */

	var app = new Vue({
	    el: '#app',
	    components: {
	        'my-component': {
	            template: '<div>a custom component!</div>'
	        }
	    }
	});

	Vue.component('simple-counter', {
	    template: '<button @click="counter += 1">{{counter}}</button>',
	    data: function data() {
	        return { counter: 0 };
	    }
	});

	var app2 = new Vue({
	    el: '#app2'
	});

	Vue.component('child', {
	    props: ['message'],
	    template: '<p>{{message}}</p>'
	});

	var child = new Vue({
	    el: '#child'
	});

	Vue.component('app3', {
	    props: ['myMessage'],
	    template: '<span>{{myMessage}}</span>'
	});

	var app3 = new Vue({
	    el: '#app3',
	    data: {
	        parentMsg: 'msg from parent!'
	    }
	});

	/**
	 * Prop验证
	 * type 可以是下面原生构造器：
	 * String
	 * Number
	 * Boolean
	 * Function
	 * Object
	 * Array
	 * type 也可以是一个自定义构造器，使用 instanceof 检测。
	 * */

	Vue.component('example', {
	    props: {
	        // 基础类型检测 （`null` 意思是任何类型都可以）
	        propA: Number,
	        // 多种类型
	        propB: [String, Number],
	        // 必传且是字符串
	        propC: {
	            type: String,
	            required: true
	        },
	        // 数字，有默认值
	        propD: {
	            type: Number,
	            default: 100
	        },
	        // 数组／对象的默认值应当由一个工厂函数返回
	        propE: {
	            type: Object,
	            default: function _default() {
	                return { message: 'hello' };
	            }
	        },
	        // 自定义验证函数
	        propF: {
	            validator: function validator(value) {
	                return value > 10;
	            }
	        }
	    }
	});

	/**
	 * 子组件向父组件传递数据 通过自定义事件
	 * 在某个组件的根元素上监听一个原生事件。可以使用 .native 修饰 v-on
	 * <my-component v-on:click.native="doTheThing"></my-component>
	 * */

	Vue.component('button-counter', {
	    template: '<button @click="increment">{{counter}}</button>',
	    data: function data() {
	        return { counter: 0 };
	    },

	    methods: {
	        increment: function increment() {
	            this.counter += 1;
	            this.$emit('increment');
	        }
	    }
	});

	new Vue({
	    el: '#app4',
	    data: {
	        total: 0
	    },
	    methods: {
	        incrementTotal: function incrementTotal() {
	            this.total += 1;
	        }
	    }
	});

/***/ }
/******/ ]);