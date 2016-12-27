/**
 * Des
 * Created by luowei5 on 2016/12/23.
 * E-mail luowei5@jd.com
 * Update 2016/12/23
 */
import Vue from 'vue';
import Vuex from 'vuex';
import Actions from '../component/actions.vue';

Vue.use(Vuex);

/*
* Action 类似于 mutation，不同在于:
* Action提交的是mutation，而不是直接变更状态。
* Action可以包含任意异步操作
*
* *意味着Action不能单独使用，必须配合mutation一起使用
* */

let list = [
    {id: 1, text: 'this is test text1', done: true},
    {id: 2, text: 'this is test text2', done: false},
    {id: 3, text: 'this is test text3', done: true},
    {id: 4, text: 'this is test text4', done: false},
    {id: 5, text: 'this is test text5', done: true},
    {id: 6, text: 'this is test text6', done: false}
];

const store = new Vuex.Store({
    state: {
        num: 0,
        todos: list,
        message: 'Hello World!'
    },
    mutations: {
        test: state => state.num++,
        doneTodosOdd: state => {
            state.todos = list.filter(todo => todo.done);
            console.log(list);
        },
        doneTodosEven: state => {
            state.todos = list.filter(todo => !todo.done);
            console.log(list);
        },
        AMutation: state => state.message = 'message被AMutation更改',
        BMutation: (state, obj) => {
            console.log(obj);
            state.message = obj.message;
        }
    },
    actions: {
        odd({commit}) {  //参数是一个与store实例具有相同方法和属性的context对象 ，可以用参数解构来简化代码
            setTimeout(function (){
                commit('doneTodosOdd');
            }, 2000);
        },
        even({commit}) {
            setTimeout(function (){
                commit('doneTodosEven');
            }, 2000);
        },
        test({commit}) {
            setTimeout(function (){
                commit('test');
            }, 1000);
        },
        async AAction({commit}) {
            return new Promise((resolve, reject) => {
                setTimeout(function (){
                    commit('AMutation');
                    resolve({
                        msg: '接受到了AAction发出的Promise'
                    });
                }, 2000);
            });
        },
        async BAction({dispatch, commit}) {
            // dispatch('AAction')
            //     .then((data) => {
            //         console.log(data);
            //         commit({
            //             type: 'BMutation',
            //             message: data.msg
            //         })
            //     })
            let data = await dispatch('AAction');
            commit({
                type: 'BMutation',
                message: data.msg
            });
        }
    }
});

new Vue({
    el: '#app',
    components: {Actions},
    store  //将store注入到组件里面  类似react-redux里面的provide把store传给每个组件
});