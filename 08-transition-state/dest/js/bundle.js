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

	new Vue({
	    el: '#animated-number-demo',
	    data: {
	        number: 0,
	        animatedNumber: 0
	    },
	    watch: {
	        number: function number(newValue, oldValue) {
	            console.log('newValue: ' + newValue + ' --- oldValue: ' + oldValue);
	            var vm = this;
	            function animate(time) {
	                requestAnimationFrame(animate);
	                TWEEN.update(time);
	            }

	            new TWEEN.Tween({ tweeningNumber: oldValue }).easing(TWEEN.Easing.Quadratic.Out).to({ tweeningNumber: newValue }, 500).onUpdate(function () {
	                vm.animatedNumber = this.tweeningNumber.toFixed(0);
	            }).start();

	            animate();
	        }
	    }
	});

	var Color = net.brehaut.Color;

	new Vue({
	    el: '#changeColor',
	    data: {
	        colorQuery: '',
	        color: {
	            red: 0,
	            green: 0,
	            blue: 0,
	            alpha: 1
	        },
	        tweenedColor: {}
	    },
	    created: function created() {
	        this.tweenedColor = this.color;
	    },

	    watch: {
	        color: function color() {
	            function animate(time) {
	                requestAnimationFrame(animate);
	                TWEEN.update(time);
	            }

	            new TWEEN.Tween(this.tweenedColor).to(this.color, 750).start();

	            animate();
	        }
	    },
	    computed: {
	        tweenedCSSColor: function tweenedCSSColor() {
	            console.log(1);
	            return new Color(this.tweenedColor).toCSS();
	        }
	    },
	    methods: {
	        updateColor: function updateColor() {
	            this.color = new Color(this.colorQuery).toRGB();
	            this.colorQuery = '';
	        }
	    }
	});

	Vue.component('animated-integer', {
	    template: '<span>{{tweeningValue}}</span>',
	    props: {
	        value: {
	            type: Number,
	            required: true
	        }
	    },
	    data: function data() {
	        return { tweeningValue: 0 };
	    },

	    watch: {
	        value: function value(newValue, oldValue) {
	            this.tween(oldValue, newValue);
	        }
	    },
	    mounted: function mounted() {
	        this.tween(0, this.value);
	    },

	    methods: {
	        tween: function tween(startValue, endValue) {
	            var vm = this;

	            function animate(time) {
	                requestAnimationFrame(animate);
	                TWEEN.update(time);
	            }

	            new TWEEN.Tween({ tweeningValue: startValue }).to({ tweeningValue: endValue }, 500).onUpdate(function () {
	                vm.tweeningValue = this.tweeningValue.toFixed(0);
	            }).start();

	            animate();
	        }
	    }
	});

	new Vue({
	    el: '#sum',
	    data: {
	        firstNumber: 20,
	        secondNumber: 20
	    },
	    computed: {
	        result: function result() {
	            return this.firstNumber + this.secondNumber;
	        }
	    }
	});

/***/ }
/******/ ]);