<template>
    <div>
    <div class="container">
        <div class="row border-0 pt-3">
            <div class="col-1"></div>
            <div class="col align-content-center d-flex flex-column">
                <Post :isStickyPost="true"/>
                <Post :isStickyPost="false" v-for="item in items"/>
                <button class="btn text-secondary justify-content-center my-4">Show More...</button>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
    </div>
</template>
<script>
import Post from './Post.vue';
export default {
    data: () => ({
        items:8
    }),
    components:{
        Post
    },
}
</script>
<style lang="">
    
</style>