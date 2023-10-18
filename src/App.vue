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
</template>

<style scoped></style>
