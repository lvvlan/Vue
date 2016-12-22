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
	 * 过渡效果
	 * 会有 4 个(CSS)类名在 enter/leave 的过渡中切换
	 * v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
	 * v-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在 transition/animation 完成之后移除。
	 * v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
	 * v-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在 transition/animation 完成之后移除。
	 * */

	new Vue({
	    el: '#app',
	    data: {
	        show: true
	    }
	});

	new Vue({
	    el: '#app1',
	    data: {
	        show: true
	    }
	});

	/**
	 * CSS 动画用法同 CSS 过渡，区别是在动画中 v-enter 类名在节点插入 DOM 后不会立即删除，而是在 animationend 事件触发时删除。
	 * */
	new Vue({
	    el: '#app2',
	    data: {
	        show: true
	    }
	});

	/**
	 * 过以下特性来自定义过渡类名：
	 * enter-class='xxx'
	 * enter-active-class='xxx'
	 * leave-class='xxx'
	 * leave-active-class='xxx'
	 * 他们的优先级高于普通的类名
	 * */

	/**
	 * 利用js钩子设置过渡效果
	 * （就是把过渡的css换成js实现）
	 * <transition
	 * v-on:before-enter="beforeEnter"
	 * v-on:enter="enter"
	 * v-on:after-enter="afterEnter"
	 * v-on:enter-cancelled="enterCancelled"
	 * v-on:before-leave="beforeLeave"
	 * v-on:leave="leave"
	 * v-on:after-leave="afterLeave"
	 * v-on:leave-cancelled="leaveCancelled"
	 * >
	 * <!-- ... -->
	 * </transition>
	 *
	 * methods: {
	 * // --------
	 * // 进入中
	 * // --------
	 * beforeEnter: function (el) {
	 *   // ...
	 * },
	 * // 此回调函数是可选项的设置
	 * // 与 CSS 结合时使用
	 * enter: function (el, done) {
	 *   // ...
	 *   done()
	 * },
	 * afterEnter: function (el) {
	 *   // ...
	 * },
	 * enterCancelled: function (el) {
	 *   // ...
	 * },
	 * // --------
	 * // 离开时
	 * // --------
	 * beforeLeave: function (el) {
	 *   // ...
	 * },
	 * // 此回调函数是可选项的设置
	 * // 与 CSS 结合时使用
	 * leave: function (el, done) {
	 *   // ...
	 *   done()
	 * },
	 * afterLeave: function (el) {
	 *   // ...
	 * },
	 * // leaveCancelled 只用于 v-show 中
	 * leaveCancelled: function (el) {
	 *   // ...
	 * }
	 *}
	 * */

	new Vue({
	    el: '#app3',
	    data: {
	        show: false
	    },
	    methods: {
	        beforeEnter: function beforeEnter(el) {
	            el.style.opacity = 0;
	        },
	        enter: function enter(el, done) {
	            Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 });
	            Velocity(el, { fontSize: '1em' }, { complete: done });
	        },
	        leave: function leave(el, done) {
	            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 });
	            Velocity(el, { rotateZ: '100deg' }, { loop: 2 });
	            Velocity(el, {
	                rotateZ: '45deg',
	                translateY: '30px',
	                translateX: '30px',
	                opacity: 0
	            }, { complete: done });
	        }
	    }
	});

	/**
	 * 初始渲染的过渡 
	 * 和进入离开的过渡一样   可以指定CSS类名  或者通过JS钩子
	 * */

	new Vue({
	    el: '#app4'
	});

	/**
	 * 多个元素过渡
	 * 当有相同标签名的元素切换时，需要通过 key 特性设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容。
	 * <transition>
	 * <button v-if="isEditing" key="save">
	 * Save
	 * </button>
	 * <button v-else key="edit">
	 * Edit
	 * </button>
	 * </transition>
	 * */

	/**
	 * 渲染一组元素 transition-group
	 * */
	new Vue({
	    el: '#list-demo',
	    data: {
	        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	        nextNum: 10
	    },
	    methods: {
	        randomIndex: function randomIndex() {
	            return Math.floor(Math.random() * this.items.length);
	        },
	        add: function add() {
	            this.items.splice(this.randomIndex(), 0, this.nextNum++);
	        },
	        remove: function remove() {
	            this.items.splice(this.randomIndex(), 1);
	        }
	    }
	});

	/**
	 * 位移的过渡
	 * v-mode: 他会在元素改变定位的过程当中被应用
	 * 与之前的类名一样 可以通过name属性定义前缀 也可以通过move-class 属性手动设置
	 * 注：需要注意的是使用 FLIP 过渡的元素不能设置为 display: inline 。作为替代方案，可以设置为 display: inline-block 或者放置于 flex 中
	 * */
	new Vue({
	    el: '#flip-list-demo',
	    data: {
	        items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
	    },
	    methods: {
	        shuffle: function shuffle() {
	            this.items = this.items.sort(function () {
	                return Math.random() - 0.5;
	            });
	        }
	    }
	});

	new Vue({
	    el: '#sudo-demo',
	    data: {
	        cells: Array.apply(null, { length: 81 }).map(function (el, index) {
	            return {
	                id: index,
	                number: index % 9 + 1
	            };
	        })
	    },
	    methods: {
	        shuffle: function shuffle() {
	            this.cells = this.cells.sort(function () {
	                return Math.random() - 0.5;
	            });
	        }
	    }
	});

	new Vue({
	    el: "#staggered-list-demo",
	    data: {
	        query: '',
	        list: [{ msg: 'Lee' }, { msg: 'Leon' }, { msg: 'Red' }, { msg: 'Jet Li' }]
	    },
	    computed: {
	        computedList: function computedList() {
	            return this.list.filter(function (item) {
	                return item.msg.toLowerCase().indexOf(this.query.toLowerCase()) !== -1;
	            }.bind(this));
	        }
	    },
	    methods: {
	        beforeEnter: function beforeEnter(el) {
	            el.style.opacity = 0;
	            el.style.height = 0;
	        },
	        enter: function enter(el, done) {
	            var delay = el.dataset.index * 150;
	            setTimeout(function () {
	                Velocity(el, { opacity: 1, height: '1.6em' }, { complete: done });
	            }, delay);
	        },
	        leave: function leave(el, done) {
	            var delay = el.dataset.index * 150;
	            setTimeout(function () {
	                Velocity(el, { opacity: 0, height: 0 }, { complete: done });
	            }, delay);
	        }
	    }
	});

	new Vue({
	    el: '#dynamic-fade-demo',
	    data: {
	        stop: false,
	        show: true,
	        fadeInDuration: 1000,
	        fadeOutDuration: 1000,
	        maxFadeDuration: 1500
	    },
	    mounted: function mounted() {
	        this.show = false;
	        console.log(this);
	    },

	    methods: {
	        beforeEnter: function beforeEnter(el) {
	            el.style.opacity = 0;
	        },
	        enter: function enter(el, done) {
	            var vm = this;
	            Velocity(el, { opacity: 1 }, { duration: this.fadeInDuration, complete: function complete() {
	                    done();
	                    if (!vm.stop) vm.show = false;
	                }
	            });
	        },
	        leave: function leave(el, done) {
	            var vm = this;
	            Velocity(el, { opacity: 0 }, { duration: this.fadeOutDuration, complete: function complete() {
	                    done();
	                    vm.show = true;
	                }
	            });
	        }
	    }
	});

/***/ }
/******/ ]);