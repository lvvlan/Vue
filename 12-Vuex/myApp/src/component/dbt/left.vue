<template>
    <div>
        <div class="left_top" data-type="dbtLeft">
            <ul class="item_list" data-type="content">
                <li v-for="(item, i) in data.promote" :key='i'>
                    <a :href="item.href" target="_blank" :clstag="'a'+(i+1)">
                        <img :src="item.imgSrc"/>
                    </a>
                </li>
            </ul>
            <ol class="point" data-type="bar">
                <li v-for="(item, i) in data.promote" :key="i" :class="i == 0 ? 'active':''"></li>
            </ol>
        </div>
        <div class="left_bottom">
            <ul class="item_list">
                <li v-for="(item, i) in data.articleList" :key="i" :class="i == 0 ? 'first':''">
                    <a :href="item.href" target="_blank" :title="item.title" :clstag="'jr|keycount|newbthome|dbthdlist'+(i+1)"><em>[{{item.tag}}]</em>{{item.title}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex';

    export default{
        computed: {
            ...mapState({
                data: state => state.DBT_left.data
            })
        },
        mounted() {
            this.$store.dispatch('updateData', (data) => {
                console.log(data);
            });
        }
    }
</script>
