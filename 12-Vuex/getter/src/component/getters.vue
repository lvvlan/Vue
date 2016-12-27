<template>
    <div>
        <h2>Getters</h2>
        <ul>
            <li v-for="todo in doneTodos">{{todo.text}}</li>
        </ul>
    </div>
</template>
<style scoped>
    h2{
        background-color:#399;
    }
</style>
<script>
    import { mapGetters } from 'vuex'

    export default{
        computed: mapGetters([    // 计算属性与state节点名相同，可以使用数组表达
            'doneTodos'
        ])
    }
</script>
