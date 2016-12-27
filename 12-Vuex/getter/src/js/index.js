/**
 * Des
 * Created by luowei5 on 2016/12/23.
 * E-mail luowei5@jd.com
 * Update 2016/12/23
 */
import Vue from 'vue';
import Vuex from 'vuex';
import Getters from '../component/getters.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [
            {id: 1, text: 'this is test text1', done: true},
            {id: 2, text: 'this is test text2', done: false},
            {id: 3, text: 'this is test text3', done: true},
            {id: 4, text: 'this is test text4', done: false},
            {id: 5, text: 'this is test text5', done: true},
            {id: 6, text: 'this is test text6', done: false}
        ]
    },
    getters: {  //getters 应该不是响应式的  因为用getters里面的方法更改state 并没有更新view
        doneTodos: state => state.todos.filter(todo => todo.done)
    }
});

new Vue({
    el: '#app',
    components: {Getters},
    store  //将store注入到组件里面  类似react-redux里面的provide把store传给每个组件
});