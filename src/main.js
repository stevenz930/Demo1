import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/index.js'

import 'bootstrap'
import './assets/my.scss'

//import Shop from './components/Shop.vue'
//import Gallery from './components/Gallery.vue'
//import Post from './components/Post.vue'
//import About from './components/About.vue'
//
//const routes = {
//  '/' : About,
//  'Post' : Post,
//  'Gallery' : Gallery,
//  'Shop' : Shop
//}
const app = createApp(App)
app.use(router)
app.mount('#app')
