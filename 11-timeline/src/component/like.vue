<template>
    <div class="hello">
        <h1>你来搞我啊</h1>
    </div>
</template>

<script>
export default {
    name: 'hello',
    created(){
        console.log("我活了")
    },
    destroyed(){
        console.log("我死了")
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>