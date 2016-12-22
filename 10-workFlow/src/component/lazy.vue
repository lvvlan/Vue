<template>
    <h3>load this component after 3s... -> {{msg}}</h3>
</template>
<style>
 @import '../../assets/css/lazy.css';
 h4{
    display: block;
 }
</style>
<script>
    export default{
        name: 'lazy',
        data(){
            return{
                msg:'from lazy.vue'
            }
        }
    }
</script>
