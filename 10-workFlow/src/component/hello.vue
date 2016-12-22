<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <p>============================================================</p>
        <com-a></com-a>
        <p>============================================================</p>
        <com-b></com-b>
    </div>
</template>
<style>
    h1{
        color:#399;
    }
</style>
<script>
    import ComA from './a';
    import ComB from './b';

    export default{
        name: 'Abc',
        data(){
            return{
                msg:'Hello World~!!! -> from hello.vue~!'
            }
        },
        components: {
            ComA,
            ComB
        }
    }
</script>
