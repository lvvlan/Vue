/**
 * Des
 * Created by luowei5 on 2016/12/23.
 * E-mail luowei5@jd.com
 * Update 2016/12/23
 */
import Vue from 'vue';
import Vuex from 'vuex';
import Counter from '../component/counter.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
});

new Vue({
    el: '#app',
    components: {Counter},
    store  //将store注入到组件里面  类似react-redux里面的provide把store传给每个组件
    // computed: {
    //     count() {
    //         return store.state.count;
    //     }
    // },
    // methods: {
    //     increment() {
    //         store.commit('increment');
    //     },
    //     decrement() {
    //         store.commit('decrement');
    //     }
    // }
});