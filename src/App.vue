<script setup>
import MasonryLayout from './components/MasonryLayout.vue'
import NavBar from './components/NavBar.vue'
import NavBarSticky from './components/NavBarSticky.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <NavBar/>
  <Header/>
  <NavBarSticky/>
  <router-view class="mb-5"/>
  <Footer/>
</template>

<style scoped>
*{font-family:"Trebuchet MS", Helvetica, sans-serif}
</style>
