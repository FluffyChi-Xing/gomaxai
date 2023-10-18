<script setup>
import Home from "@/components/Home/Home.vue";
import HomeInfo from "@/components/infomation/HomeInfo.vue";
</script>

<template>
  <div class="background">
    <Home></Home>
    <HomeInfo></HomeInfo>
  </div>
</template>

<style scoped>
.background {
  width: 1519px;
  height: 735px;
  display: block;
  position: relative;
  overflow-x: hidden;
}
.background::-webkit-scrollbar {
  display: none;
}
</style>