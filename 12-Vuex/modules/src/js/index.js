/**
 * Des
 * Created by luowei5 on 2016/12/23.
 * E-mail luowei5@jd.com
 * Update 2016/12/23
 */
import Vue from 'vue';
import Vuex from 'vuex';
import App from '../component/App.vue';
import increment from '../modules/increment';
import decrement from '../modules/decrement';

Vue.use(Vuex);

//插件
const myPlugin = store => {
    console.log('store ↓↓');
    console.log(store);
    store.subscribe((mutation, state) => {
        console.log('mutation ↓↓');
        console.log(mutation);
        console.log('state ↓↓');
        console.log(state);
    });
};

const store = new Vuex.Store({
    state: {
        num: 0,
        message: 'Hello World~!'
    },
    mutations: {
        commonIncrement: state => state.num++,
        commonDecrement: state => state.num--,
        changeMessage: (state, {msg}) => state.message = msg
    },
    modules: {
        increment,
        decrement
    },
    plugins: [myPlugin]
});

new Vue({
    el: '#app',
    components: {App},
    store  //将store注入到组件里面  类似react-redux里面的provide把store传给每个组件
});