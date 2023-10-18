<script setup>

</script>

<template>
  <div class="topnav">
    <div class="top-logo"></div>
    <div class="top_left">
      <div class="top_function">
        <ul>
          <li><router-link href="#" to="/family">宇宙家庭</router-link></li>
          <li><router-link href="#" to="/life">家族人生</router-link></li>
          <li><router-link href="#" to="/office">AI办公</router-link></li>
          <li><router-link href="#" to="/school">启蒙学院</router-link></li>
          <li><router-link href="#" to="/ground">创作广场</router-link></li>
        </ul>
      </div>
    </div>
    <div class="top_right">
      <div class="money">
        <div class="money_img"></div>
        <span>0.00</span>
      </div>
      <div class="web_info">
        <span>GPT4：0</span>
        <span>MJ：0</span>
        <span>SD：0</span>
      </div>
      <div class="document_manage">
        <img src="../../assets/doc.png" alt="">
        <span>创作管理</span>
      </div>
      <div class="account">
        <img src="../../assets/dem.png" alt="">
        <span>升级会员</span>
      </div>
      <div class="note">
        <img src="../../assets/lin.png" alt="">
      </div>
      <van-button class="login" to="/login">
        登录/注册
      </van-button>
    </div>
  </div>
</template>

<style scoped>
@import "HomeCss.css";
</style>