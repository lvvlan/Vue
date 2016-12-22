<template>
    <h2 class="ah2">{{msg}}</h2>
</template>
<style scoped>
    h2 {
        color: #ff0;
        display: flex;
    }
</style>
<script>
    export default{
        name: 'next',
        data(){
            return{
                msg:'this is a component~ -> from a.vue!'
            }
        },
        mounted() {
            $('.ah2').css('color', 'blue')
        }
    }
</script>
