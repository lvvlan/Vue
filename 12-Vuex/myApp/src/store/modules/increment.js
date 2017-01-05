/**
 * Des
 * Created by luowei5 on 2016/12/27.
 * E-mail luowei5@jd.com
 * Update 2016/12/27
 */

export default {
    state: {
        num: 0,
        message: 'this message from module-increment after 2 seconds~!'
    },
    mutations: {
        /*increment: (state, payload, rootState) => {
            模块里面的mutations并没有rootState的状态
            所以要改变rootState的属性 就需要对应的root方法
            console.log(state, payload, rootState);
        },*/
        localIncrement: state => state.num++
        //incrementChangeMessage: state => state.message = state.increment.message
    },
    actions: {
        incrementAction({commit, state}) {
            commit('commonIncrement');
            commit('localIncrement');
            setTimeout(function (){
                commit('changeMessage', {msg: state.message});
            }, 2000);
        }
    }
};