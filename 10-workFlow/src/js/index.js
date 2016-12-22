/**
 * Des
 * Created by luowei5 on 2016/12/8.
 * E-mail luowei5@jd.com
 * Update 2016/12/8
 */
import Vue from 'vue';
import Abc from '../component/hello';
import Lazy from '../component/lazy.vue';

new Vue({
    el: '#app',
    components: { Abc },
    mounted() {
        console.log($('.bh2'));
        console.log($('.hello'));
    }
});

// setTimeout(function (){
//     new Vue({
//         el: '#lazy',
//         template: '<lazy />',
//         components: { Lazy }
//     });
// }, 3000);

Vue.component('lazy', function (resolve) {
    require.ensure([], function () {
        console.log(111);a;
        setTimeout(function (){
            console.log(22);
            require(['../component/lazy.vue'], resolve);
            console.log(333);
        }, 3000);
    }, 'lazy');
});

new Vue({
    el: '#lazy'
});