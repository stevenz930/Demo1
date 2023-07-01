<template>
    <div class="container pt-3">
        <div class="row">
            <div class="col-3 mb-2" v-for="item in items">
                <div class="card">
                    <img class="card-img-top img-fluid" :src="getImage()" alt="">
                    <div class="card-body">
                        <div class="">
                            <h5 class="card-title text-start">{{getImage()}}</h5>
                            <a href="#" class="btn bg-warning bg-opacity-75 border float-start ">Add to Cart</a>
                            <a href="#" class="btn bg-danger text-white border float-end">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn text-secondary justify-content-center my-4">Show More...</button>
        </div>
    </div>
</template>

<script>
import * as _ from 'lodash'
import Masonry from "masonry-layout"
import imagesLoaded from 'imagesloaded'

export default {
    data: () => ({
        items:10
    }),
    methods:{
        getImage:function(){
            var height = _.random(0, 9);
            var seed = _.random(0, 10);
            var src = "https://picsum.photos/1080/1" + height + "00?random=" + seed;
            console.log(src);
            return src
        }
    },
    mounted(){
        var grid = document.querySelector('.row');
        var msnry = new Masonry(grid,{
            percentPosition: true
        });

        imagesLoaded( grid, function() {
            msnry.layout('layout');
            console.log('all images are loaded');
        });
        console.log('MOUNTED');
    }
};

</script>

<style scoped>

</style>