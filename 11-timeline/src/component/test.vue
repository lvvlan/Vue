<template>
    <div>
        <h3>{{msg}}</h3>
        <div id='testVue'>
            <button @click="handleClick">更改data</button>
        </div>
    </div>
</template>
<style scoped>
    div{
        background-color:#399;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'this message from test.vue~'
            }
        },
        methods: {
            handleClick() {
                this.msg = 'World Hello @@@';
            }
        },
        created() {
            console.log('%c from test.vue: im created!', 'background: #399; color: #f52f3e;');
        },
        destroyed() {
            console.log('%c from test.vue: im destroyed!', 'background: #399; color: #f52f3e;');
        },
        beforeUpdate() {
            console.log(`%c test1. beforeUpdate方法被调用;\n组件更新之前`, 'background: #399; color: #f52f3e;');
          },
        updated() {
            console.log(`%c test2. updated方法被调用;\n组件更新之后`, 'background: #399; color: #f52f3e;');
          }
    }
</script>
