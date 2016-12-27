<template>
    <div id="wrapper">
        404：请不要太着急
        <keep-alive v-if="!destroy">
            <Like/>
        </keep-alive>
        <button @click="changeShow">show</button>
        <button @click="changeDestroy">destroy</button>
    </div>
</template>
<style scoped>
div#wrapper {
display: flex;
flex-direction: column;
width: 83%;
justify-content: center;
font-size: xx-large;
    }
</style>
<script>
import Like from "./like.vue"

export default {
    data(){
        return {
            destroy: false,
            show: true,
        }
    },
    components: {Like},
    methods: {
        changeShow(){
            console.log("changeShow Click");
            console.log('destroy:', this.destroy, 'show:', this.show);
            this.show = !this.show;
        },
        changeDestroy(){
            console.log("changeDestroy Click");
            console.log('destroy:', this.destroy, 'show:', this.show);
            this.destroy = !this.destroy;
        }
    }
}
</script>