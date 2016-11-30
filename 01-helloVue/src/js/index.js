/**
 * Des
 * Created by luowei5 on 2016/11/29.
 * E-mail luowei5@jd.com
 * Update 2016/11/29
 */

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'somethings show~~~'
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
        arr: [
            {text: 'Lean JS'},
            {text: 'Lean Vue'},
            {text: 'Lean React'}
        ]
    }
});

app4.arr.push({text: 'this one'});

var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Hello World!'
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'hello world!'
    }
});

Vue.component('todo-item', {
    props: ['arr'],
    template: '<li>{{arr.text}}</li>'
});

var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            {text: 'abc'},
            {text: 'xyz'},
            {text: 123}
        ]
    }
});