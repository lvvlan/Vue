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
        todos: [
            'abc',
            'xyz',
            123
        ]
    },
    methods: {
        addNewTodo() {
            this.todos.push(this.newTodoText);
            this.newTodoText = '';
        }
    }
});

//显示过滤/排序结果
var arr = new Vue({
    el: '#arr',
    data: {
        numbers: [1,2,3,4,5,6,7,8]
    },
    computed: {
        evenNumbers() {
            return this.numbers.filter((n) => n%2===0);
        }
    }
});