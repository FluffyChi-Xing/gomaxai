<script setup>
import {ref} from "vue";
const checked = ref('0')
//数据
const userID = ref('DJTU123456')
const password = ref('123456')

// 3 秒后自动关闭
const showNotify = () => {
  alert('注册成功')
}
</script>

<template>
  <div class="item">
    <div class="background">
      <h1>欢迎注册</h1>
      <van-notice-bar scrollable text="有任何问题请联系站点管理员，Tel: 400-600-114514" left-icon="volume-o"></van-notice-bar>
      <div class="title">用户名</div>
      <input type="text" placeholder="请输入用户名" :value="userID">
      <div class="title">密码</div>
      <input type="password" placeholder="请输入密码" :value="password">
      <div class="title">请确认密码</div>
      <input type="password" placeholder="请再次输入密码" :value="password">
      <van-button type="warning" to="/" class="van-button_1">回到首页</van-button>
      <van-button type="primary" class="van-button_2" @click="showNotify">注册</van-button>
      <van-radio-group shape="square" v-model="checked">
        <van-radio name="1">确认</van-radio>
        <p class="xx"><a href="#">点击阅读用户协议</a></p>
      </van-radio-group>
    </div>
  </div>
</template>

<style scoped>
@import "endollcss.css";
</style>