<script setup lang="ts">
import { ref } from 'vue'
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
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
<!--    //left-->
    <div class="left">
      <el-button style="margin-top: 70px">儿童专区</el-button>
      <el-button>老人专区</el-button>
      <el-button>靓丽女人</el-button>
      <el-button>美好生活</el-button>
    </div>
<!--    //right-->
    <div class="right">
      <div class="talk-ground">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>你好!我是你的私人管家!</span>
              <p>作为你的智能伙伴，我既能写文案、想点子，又能陪你聊天、答疑解惑。</p>
              <p>想知道我还能做什么？<a href="#">点这里快速上手！</a>想学习如何提问？<a href="#">点这里</a>，每天1分钟，解锁我的无限潜能！</p>
            </div>
          </template>
          <div class="function">
            <span>什么是高血压?</span>
          </div>
          <div class="function">
            <span>孩子不写作业怎么办?</span>
          </div>
          <div class="function">
            <span>八宝粥的制作方法?</span>
          </div>
          <div class="function">
            <span>旅顺有什么好吃的?</span>
          </div>
        </el-card>
        <div class="box-card_2" style="padding: 0!important;">
          <input type="text" placeholder="请输入问题">
          <van-button type="primary">发送</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "lifecss.css";
</style>