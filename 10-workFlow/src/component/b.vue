<template>
    <h2 class="bh2">{{msg}}</h2>
</template>
<style>
    h2 {
        color: #f00;
    }
</style>
<script>
    export default{
        name: 'next',
        data(){
            return{
                msg:'this is b component~ -> from b.vue!'
            }
        }
    }
</script>
