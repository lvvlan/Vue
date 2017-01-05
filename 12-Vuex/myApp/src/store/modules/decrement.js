/**
 * Des
 * Created by luowei5 on 2016/12/27.
 * E-mail luowei5@jd.com
 * Update 2016/12/27
 */

export default {
    state: {
        num: 0,
        message: 'this message from module-decrement after 2 seconds~!'
    },
    mutations: {
        localDecrement: state => state.num--
    },
    actions: {
        decrementAction({commit, state}) {
            commit('commonDecrement');
            commit('localDecrement');
            setTimeout(function (){
                commit('changeMessage', {msg: state.message});
            }, 2000);
        }
    }
};