// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Abc from '../component/hello'
import Lost from '../component/404.vue';

new Vue({
    el: '#app',
    components: { Abc }
});
