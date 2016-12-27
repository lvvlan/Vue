<template>
    <div>
        <h2>{{message}}</h2>
        <p>common num => {{num}}</p>
        <button @click="incrementAction">+</button> &nbsp; <button @click="decrementAction">-</button>
        <p>increment num => {{increment.num}} (incrementNum每次自增)</p>
        <p>decrement num => {{decrement.num}} (decrementNum每次递减)</p>
    </div>
</template>
<style scoped>
    h2{
        background-color:#399;
    }
</style>
<script>
    import { mapActions, mapState } from 'vuex'

    export default{
        computed: {
            ...mapState([
                'num',
                'message',
                'increment',
                'decrement'
            ])
        },
        methods: {
            ...mapActions([
                'incrementAction',
                'decrementAction'
            ])
        }
    }
</script>
