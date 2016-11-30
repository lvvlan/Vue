/**
 * Des
 * Created by luowei5 on 2016/11/29.
 * E-mail luowei5@jd.com
 * Update 2016/11/29
 */

var app = new Vue({
    el: '#app',
    data: {
        message: '输入多行文本'
    }
});

var check = new Vue({
    el: '#check',
    data: {
        checked: false,
        checkNames: [],
        a: '选中了!',
        b: '未选中!'
    }
});

var radio = new Vue({
    el: '#radio',
    data: {
        picked: 'one'
    }
});

var select = new Vue({
    el: '#select',
    data: {
        select1: 'A',
        select2: ['B']
    }
});

var selectFor = new Vue({
    el: '#selectFor',
    data: {
        selected: 'A',
        options: [
            {text: 'one', value: 'A'},
            {text: 'two', value: 'B'},
            {text: 'three', value: 'C'}
        ]
    }
});

/**
 * 修饰符
 * .lazy
 * <!-- 在 "change" 而不是 "input" 事件中更新 -->
 * <input v-model.lazy="msg" >
 * .number
 * 如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个修饰符 number 给 v-model 来处理输入值：
 * <input v-model.number="age" type="number">
 * .trim
 * 如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入：
 * <input v-model.trim="msg">
 * */
