<template>
    <div class="container py-5 mb-6">
        <div class="position-relative" id="bg">
            <img class="img-fluid rounded" :src="getImage()" alt="">
            <div class="position-absolute top-110 start-0 translate-middle-y w-100" id="profile">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <img class="rounded-circle border border-white border-4" src="https://picsum.photos/120/120?random=99" alt="">
                        <div class="ms-2">
                            <h3>Name</h3>
                            <div class="d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-heart-fill text-donate my-auto me-2" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg>
                                <p class="m-0">{{getSupporters()}} Supporters</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-row-reverse float-end">
                        <button class="btn btn-light fs-5 rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>
                        </button>
                        <button class="btn btn-light fs-5 rounded-pill px-4">Follow</button>
                        <button class="btn btn-donate text-white fs-5 rounded-pill px-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9ZM1.124 4l1.516 6.825A1.5 1.5 0 0 0 4.104 12h5.792a1.5 1.5 0 0 0 1.464-1.175L12.877 4H1.123Z"/>
                            </svg>Donate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as _ from 'lodash'

export default {
    data: () => ({
        items:20,
        Supporters:100
    }),
    methods:{
        getImage:function(){
            var seed = _.random(0, 99);
            var src = "https://picsum.photos/1920/600?random=" + seed;
            console.log(src);
            return src
        },
        getSupporters:function(){
            return _.random(0,this.Supporters)
        }
    },
    mounted(){
    }
};
</script>
<style scoped>
</style>