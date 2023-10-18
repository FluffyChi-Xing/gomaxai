<script setup>
import {ref} from "vue";

//数据
const userID = ref('DJTU123456')
const password = ref('123456')

</script>

<template>
  <div class="item">
    <div class="background">
      <h1>欢迎登录</h1>
      <van-notice-bar scrollable text="有任何问题请联系站点管理员，Tel: 400-600-114514" left-icon="volume-o"></van-notice-bar>
      <input type="text" placeholder="请输入用户名" :value="userID">
      <input type="password" placeholder="请输入密码" :value="password">
      <van-button type="primary" to="/">登录</van-button>
      <van-divider></van-divider>
      <p>没有账号?<router-link href="#" style="text-decoration: underline;color: whitesmoke" to="/endoll">立即注册</router-link></p>
    </div>
  </div>
</template>

<style scoped>
p {
  text-align: center;
  color: whitesmoke;
}
.van-divider {
  width: 500px;
  height: 50px;
}
.van-button {
  width: 100px;
  display: block;
  position: relative;
  float: right;
  margin-top: 20px;
}
.van-notice-bar {
  background-color: #454545;
}
input {
  width: 500px;
  height: 55px;
  display: block;
  position: relative;
  margin-top: 25px;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  overflow: hidden;
  background-color: #454545;
  color: white;
}
.item {
  width: 1519px;
  height: 735px;
  display: block;
  position: relative;
  background-color: #2d3a4b;
}
.background {
  width: 500px;
  height: 500px;
  display: block;
  position: relative;
  margin: 100px auto auto;
  border-radius: 10px;
  overflow: hidden;
}
h1 {
  width: 500px;
  height: 30px;
  display: block;
  position: relative;
  line-height: 30px;
  text-align: center;
  font-size: 26px;
  font-family: 微软雅黑 sans-serif;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
}
</style>