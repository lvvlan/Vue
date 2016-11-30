/**
 * Des
 * Created by luowei5 on 2016/11/29.
 * E-mail luowei5@jd.com
 * Update 2016/11/29
 */

//事件监听
var app = new Vue({
    el: '#app',
    data: {
        counter: 0
    }
});

/**
 * 事件修饰符
 * 1. 尽量只让methods处理数据逻辑
 *
 * <!-- 阻止单击事件冒泡 -->
 * <a v-on:click.stop="doThis"></a>
 * <!-- 提交事件不再重载页面 -->
 * <form v-on:submit.prevent="onSubmit"></form>
 * <!-- 修饰符可以串联  -->
 * <a v-on:click.stop.prevent="doThat"></a>
 * <!-- 只有修饰符 -->
 * <form v-on:submit.prevent></form>
 * <!-- 添加事件侦听器时使用事件捕获模式 -->
 * <div v-on:click.capture="doThis">...</div>
 * <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
 * <div v-on:click.self="doThat">...</div>
 */

/**
 * 按键修饰符
 *
 * <!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
 * <input v-on:keyup.13="submit">
 * <!-- 同上 -->
 * <input v-on:keyup.enter="submit">
 * <!-- 缩写语法 -->
 * <input @keyup.enter="submit">
 *
 * Vue提供以下按键别名
 * enter
 * tab
 * delete (捕获 “删除” 和 “退格” 键)
 * esc
 * space
 * up
 * down
 * left
 * right
 *
 * 可以通过全局 config.keyCodes 对象自定义按键修饰符别名：
 * 可以使用 v-on:keyup.f1
 * Vue.config.keyCodes.f1 = 112
 * */
