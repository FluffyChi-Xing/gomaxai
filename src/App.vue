<<<<<<< HEAD
<script>
import Home from "@/components/Home/Home.vue";
import HomeInfo from "@/components/infomation/HomeInfo.vue";
export default {
  name: 'App',
  components: {
    Home,
    HomeInfo
  }
}
</script>

<template>
  <Home></Home>
  <HomeInfo mes="我是内容栏"></HomeInfo>
=======
<script setup>
import {RouterView} from "vue-router";

</script>

<template>
  <router-view :key="$route.fullPath"></router-view>
>>>>>>> ac90744 (	new file:   src/utils/EventBus.js)
</template>

<style scoped></style>
