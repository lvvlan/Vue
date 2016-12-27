<template>
    <div>
        <h2>Getters</h2>
        <button @click="odd">odd</button>
        <button @click="even">even</button>
        <button @click="test">test</button>
        <p>{{num}}</p>
        <ul>
            <li v-for="todo in todos">{{todo.text}}</li>
        </ul>
        <div id="demo">
            <button @click="AAction">A内容</button>
            <button @click="BAction">B内容</button>
            <p>{{message}}</p>
        </div>
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
                'todos',
                'num',
                'message'
            ])
        },
        methods: {
            ...mapActions([
                'odd',
                'even',
                'test',
                'AAction',
                'BAction'
            ])
        }
    }
</script>
