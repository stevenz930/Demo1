import {createRouter, createWebHashHistory} from 'vue-router';

// 路由列表
//import Shop from '../components/Shop.vue'
//import Gallery from '../components/Gallery.vue'
//import Post from '../components/Post.vue'
//import About from '../components/About.vue'

const routes = [
    {
        path : '/',
        name : 'About',
        component: () => import ('../components/About.vue')
    },
    {
        path : '/Posts',
        name : 'Posts',
        component: () => import ('../components/Posts.vue')
    },
    {
        path : '/Gallery',
        name : 'Gallery',
        component: () => import ('../components/Gallery.vue')
    },
    {
        path : '/Shop',
        name : 'Shop',
        component: () => import ('../components/Shop.vue')
    },
]

// 导出路由
export default  createRouter({
    history: createWebHashHistory(),
    routes
})


