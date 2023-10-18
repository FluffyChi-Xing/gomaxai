<script setup lang="ts">
import { ref } from 'vue'
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const list = [
  {id: 1,src: 'https://static.runoob.com/images/mix/img_fjords_wide.jpg'},
  {id: 2,src: 'https://static.runoob.com/images/mix/img_nature_wide.jpg'},
  {id: 3,src: 'https://static.runoob.com/images/mix/img_mountains_wide.jpg'},
]
</script>

<template>
  <div class="background">
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
      <el-menu-item index="1"><router-link to="/">返回首页</router-link></el-menu-item>
      <el-menu-item index="2">资讯</el-menu-item>
      <el-menu-item index="3">账号</el-menu-item>
      <el-sub-menu index="4">
        <template #title>更多</template>
        <el-menu-item index="2-4-1">联系站长</el-menu-item>
        <el-menu-item index="2-4-2">关于我们</el-menu-item>
        <el-menu-item index="2-4-3">免责申明</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <!-- 内容 -->
    <div class="swiper_ad">
      <el-carousel :interval="4000" type="card" height="250px">
        <el-carousel-item v-for="(item,index) in list" :key="index">
          <img :src="item.src" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="information">
      <div>

      </div>
    </div>
  </div>
</template>

<style scoped>
@import "enlightenmentcss.css";
</style>