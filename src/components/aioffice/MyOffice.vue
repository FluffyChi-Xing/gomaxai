<script setup lang="ts">
import { ref } from 'vue'
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<template>
  <div class="background">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
        >
          <el-menu-item index="1">
            <el-icon><document /></el-icon>
            <span>行业资讯</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><location /></el-icon>
            <router-link  to="/hot">热门AI工具</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><icon-menu /></el-icon>
            <span>AI办公平台</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><icon-menu /></el-icon>
            <span>AIGC平台</span>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon><icon-menu /></el-icon>
            <span>AI视觉平台</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
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
      <el-menu-item index="2">
        <router-link to="/account">
          账号
        </router-link>
      </el-menu-item>
      <el-sub-menu index="3">
        <template #title>更多</template>
        <el-menu-item index="2-4-1">联系站长</el-menu-item>
        <el-menu-item index="2-4-2">关于我们</el-menu-item>
        <el-menu-item index="2-4-3">免责申明</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <router-view/>
  </div>
</template>

<style scoped>
@import "officecss.css";
</style>