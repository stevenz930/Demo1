<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-5 text-center">

                <div class="card rounded-4 mb-4 shadow">
                    <div class="card-header bg-transparent text-start fs-5 border-0 d-flex justify-content-between align-items-center">
                        <p class="m-0 fs-5">Buy new camera</p>
                        <button class="btn btn-light text-secondary rounded-pill fs-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="progress mx-3">
                      <div class="progress-bar bg-teal" :style="{width:getPercentage()+'%'}"></div>
                    </div>
                    <div class="d-inline-flex mx-3 mb-1">
                        <p class="text-start fw-bold mb-0">{{result}}%</p>
                        <p class="text-start ms-1 mb-0">of $1000 goal</p>
                    </div>
                    <div class="card-body text-start fs-6 pt-0">
                        I want to buy a new camera
                    </div>
                </div>

                <div class="card rounded-4 mb-4 shadow">
                    <div class="card-header bg-transparent text-start fs-5 border-0">
                        About
                    </div>
                    <div class="card-body text-start fs-6">
                        Some example text some example text. Some example text some example text.<br>
                        Some example text some example text. Some example text some example text.<br>
                        Some example text some example text. Some example text some example text.<br>
                        Some example text some example text. Some example text some example text.
                    </div>
                    <div class="card-footer bg-transparent text-start border-0">
                        <div class="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg text-secondary" viewBox="0 0 16 16">
                              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                            </svg>
                            <a href="#" class="link-secondary">google.com</a>
                        </div>
                        <div>
                            <button class="btn btn-white text-secondary fs-7 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            </button>
                            <button class="btn btn-white text-secondary fs-7 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                </svg>
                            </button>
                        </div>
                        <button class="btn btn-light text-secondary rounded-pill fs-7 p-1 mx-1">Animal</button>
                        <button class="btn btn-light text-secondary rounded-pill fs-7 p-1 mx-1">Mountain</button>
                    </div>
                </div>

                <div class="sticky-top-60 z-1">
                    <div class="card rounded-4 mb-4 shadow">
                        <div class="card-header bg-transparent text-start border-0 d-flex justify-content-between align-items-center">
                            <p class="m-0 fs-5">Shop</p>
                            <router-link to="/Shop">
                                <button class="p-1 m-0 fs-6 text-secondary btn btn-light">
                                    Go to Shop
                                </button>
                            </router-link>
                        </div>
                        <div class="card-body text-start fs-6 px-3 pt-1">
                            <div class="row px-2">
                                <div class="card col-6 rounded-3 p-0 border-5 border-white" v-for="item in items">
                                    <div class="position-relative">
                                        <span class="position-absolute top-0 start-0 badge bg-dark rounded-circle opacity-75 p-2 m-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-shop-window text-white" viewBox="0 0 16 16">
                                              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                                            </svg>
                                        </span>
                                        <span class="position-absolute bottom-0 end-0 badge bg-donate m-1 p-1 rounded-1 fs-6">
                                            Free
                                        </span>
                                        <img class="card-img-top p-0" :src="getImage(900)" alt="">
                                    </div>
                                    <div class="card-body border rounded-bottom px-2 py-1">
                                        <p class="card-title px-0 py-2 mx-0 fw-bold">Some example text.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card rounded-4 mb-4 shadow">
                        <div class="card-header bg-transparent text-start border-0 d-flex justify-content-between align-items-center">
                            <p class="m-0 fs-5">Gallery</p>
                            <router-link to="/Gallery">
                                <button class="p-1 m-0 fs-6 text-secondary btn btn-light">
                                    View Gallery
                                </button>
                            </router-link>
                        </div>
                        <div class="card-body text-start fs-6">
                            <div class="row px-2">
                                <div class="col-6 p-0 border-5 border-white" v-for="item in items">
                                    <img class="card-img-top p-1 rounded-4" :src="getImage(500)" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="border rounded-4 d-flex flex-column align-content-center py-3 px-4 mb-4 shadow">
                    <p class="fs-5">But a Coffee for Name</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <button class="btn bg-warning-subtle border-donate border-2 text-donate fw-bold px-8 py-2 rounded-pill">One time</button>
                        <button class="btn bg-light border-secondary-subtle border-2 text-black fw-bold px-8 py-2 rounded-pill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                            </svg>Monthly
                        </button>
                    </div>
                    <div class="d-flex justify-content-between align-items-center my-2">
                        <p class="fs-5">$3 each</p>
                        <div class="d-flex justify-content-end">
                            <button class="btn bg-warning-subtle border-donate border-2 text-donate fw-bold rounded-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                </svg>
                            </button>
                            <input type="text" class="border border-secondary rounded-pill bg-transparent py-1 mx-1 w-25 text-center" value="1">
                            <button class="btn bg-warning-subtle border-donate border-2 text-donate fw-bold rounded-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <form class="container-fluid m-1 p-0">
                        <div class="input-group">
                            <span class="input-group-text fs-4 border border-secondary rounded-start bg-transparent">$</span>
                            <input type="text" class="border border-secondary rounded-end bg-transparent form-control me-2" value="3">
                        </div>
                    </form>
                    <input type="text" class="border border-secondary rounded-2 bg-transparent py-2 m-1" placeholder="  Your name">
                    <input type="text" class="border border-secondary rounded-2 bg-transparent py-3 m-1" placeholder="  Your message">
                    <button class="btn btn-donate fs-3 fw-bold text-white rounded-pill my-3">Donate $3</button>
                </div>
                <div class="border rounded-4 d-flex flex-column align-content-center shadow">
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="m-2 fs-5">Feed</p>
                        <button class="p-1 m-0 fs-6 text-secondary btn btn-light">Give Support</button>
                    </div>
                    <Post :isStickyPost="true"/>
                    <Post :isStickyPost="false" v-for="item in items"/>
                    <Post :isStickyPost="false" v-for="item in items"/>
                    <button class="btn text-secondary justify-content-center my-4">Show More...</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as _ from 'lodash'
import Post from './Post.vue';
export default {
    data: () => ({
        items:4,
        result:50 
    }),
    components:{
        Post
    },
    methods:{
        getImage:function(i){
            var seed = _.random(0, 99);
            var src = "https://picsum.photos/900/" + i + "?random=" + seed;
            console.log(src);
            return src
        },
        getPercentage:function(){
            this.result = _.random(25, 99)
            return this.result 
        }
    }
}
</script>
<style lang="">
    
</style>