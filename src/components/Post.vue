<template>
    <div class="d-flex flex-column border-0 mb-3">
        <div class="mx-2 bg-transparent border-0 d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center my-2">
                <img class="rounded-circle border border-white border-4" src="https://picsum.photos/30/30?random=99" alt="">
                <div class="d-flex align-items-end">
                    <h5 class="ms-2 my-0">Name</h5>
                    <p class="text-secondary my-0 fs-7 px-1">· {{getTime}}</p>
                </div>
            </div>
            <span v-if="isStickyPost" class="badge bg-danger fs-7">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-top" viewBox="0 0 16 16">
                  <rect width="4" height="12" rx="1" transform="matrix(1 0 0 -1 6 15)"/>
                  <path d="M1.5 2a.5.5 0 0 1 0-1v1zm13-1a.5.5 0 0 1 0 1V1zm-13 0h13v1h-13V1z"/>
                </svg> Sticky Post
            </span>
        </div>
        <div class="row border-2 border rounded-4 mx-2 py-2">
            <img class="col p-1 m-0" :src="getImage()" alt="">
            <p class="my-2 fs-5">{{getSomeText(2)}}</p>
        </div>
    </div>
</template>
<script>
import * as _ from 'lodash'

export default {
    props:{
        isStickyPost : Boolean
    },
    data: () => ({
        time : ""
    }),
    computed:{
        getTime:function(){
            return _.random(1,25) + "h"
        }
    },
    methods:{
        getSomeText:function(i){
            return "Hello World! ".repeat(i)
        },
        getImage:function(){
            var seed = _.random(0, 99);
            var src = "https://picsum.photos/1920/1080?random=" + seed;
            console.log(src);
            return src
        }
    }
}
</script>
<style lang="">
    
</style>