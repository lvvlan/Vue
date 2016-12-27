<template>
    <div>
        <h2>{{count}}</h2>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>
<style scoped>
    h2{
        background-color:#399;
    }
</style>
<script>
    import { mapState } from 'vuex'

    export default{
        /*computed: {
            count() {
                return this.$store.state.count;
            }
        },*/
        computed: mapState([    // 计算属性与state节点名相同，可以使用数组表达
            'count'
        ]),
        methods: {
            increment() {
                this.$store.commit('increment');
            },
            decrement() {
                this.$store.commit('decrement');
            }
        }
    }
</script>
