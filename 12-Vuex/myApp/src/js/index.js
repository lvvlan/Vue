/**
 * Des
 * Created by luowei5 on 2016/12/23.
 * E-mail luowei5@jd.com
 * Update 2016/12/23
 */
import Vue from 'vue';
import store from '../store';
import Dbt from '../component/dbt/index.vue';

new Vue({
    el: '#dbt',
    store,
    components: {Dbt},
    template: '<Dbt/>'
});