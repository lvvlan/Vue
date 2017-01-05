/**
 * Des
 * Created by luowei5 on 2016/12/28.
 * E-mail luowei5@jd.com
 * Update 2016/12/28
 */
import Vue from 'vue';
import Vuex from 'vuex';
import DBT_left from './modules/dbt/left';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        DBT_left
    }
});
