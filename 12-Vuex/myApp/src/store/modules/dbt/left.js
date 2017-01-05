/**
 * Des
 * Created by luowei5 on 2016/12/28.
 * E-mail luowei5@jd.com
 * Update 2016/12/28
 */
import immutable from 'immutable';
import getData from '../../../common/getData';
import moment from 'moment';

export default {
    state: {
        status: 'init', //init update complete
        type: 'DBT_left',
        prevUpdateTime: moment().format('YYYY-MM-DD HH:mm:ss'), //上一次更新时间
        lastUpdateTime: moment().format('YYYY-MM-DD HH:mm:ss'), //最后一次更新时间
        data: {
            "promote":[],
            "articleList": []
        }
    },
    mutations: {
        updateState: (state, newData) => {
            state.status = 'update';
            state.data = immutable.fromJS(state.data).mergeDeep(immutable.fromJS(newData)).toJS();
            state.prevUpdateTime = state.lastUpdateTime;
            state.lastUpdateTime = moment().format('YYYY-MM-DD HH:mm:ss');
        },
        completeState: (state, fn) => {
            state.status = 'complete';
            fn && fn(state.data);
        }
    },
    actions: {
        async updateData ({commit}, cbFn){
            let data = await getData('../../src/data/dbt/left.json');
            commit('updateState', data);
            commit('completeState', cbFn);
        }
    }
}