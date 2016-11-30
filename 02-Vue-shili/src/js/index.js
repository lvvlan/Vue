/**
 * Des
 * Created by luowei5 on 2016/11/29.
 * E-mail luowei5@jd.com
 * Update 2016/11/29
 */

//属性与方法
var data = {a: 5};
var vm = new Vue({
    el: '#test',
    data: data
});

let iWatch = 0;
/**
 * $watch方法
 * 1. 该方法要放在监听对象改变之前
 * 2. 不能在回调函数中用箭头函数
 * */
vm.$watch('a', function (){
    //这个回调将会在 vm.a 改变后调用
    iWatch++;
    console.log(`vm.a已被更改了${iWatch}次!`);
});

console.log(vm.a === data.a);   //true
//改变原始数据会影响属性
data.a = 12;
console.log(`改变原始数据会影响属性vm.a: ${vm.a}`);  //12
//改变属性会影响原始数据
vm.a = 7;
console.log(`改变属性会影响原始数据data.a: ${data.a}`);    //7

//Vue对外暴露的一些属性与方法（都带有前缀$）
console.log(`vm.$data === data => ${vm.$data === data}`);
console.log(`vm.$el === document.getElementById('test') => ${vm.$el === document.getElementById('test')}`);

/**
 * computed 与 method 区别
 * computed依赖缓存，就是说如果他的依赖没有发生改变 那么多次取值会返回之前已经计算过的结果
 * 如果不希望有缓存 用method代替
 * */
var app = new Vue({
    el: '#app',
    data: {
        message: 'hello world!',
        testWatch: 'watcher~~~'
    },
    computed: {
        reverseMessage() {
            return this.message.split('').reverse().join('');
        }
    },
    watch: {
        message() {
            console.log('message已被更改');
        },
        testWatch() {
            console.log('testWatch已被更改');
        }
    }
});

app.message = 'hello world!';
app.testWatch = 'hi~~~';