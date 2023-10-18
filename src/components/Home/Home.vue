<script>
export default {
  name: 'HoMe',
}
</script>

<template>
  <div class="topnav">
    <div class="top-logo"></div>
    <div class="top_left">
      <div class="top_function">
        <ul>
          <li><a href="#">宇宙家庭</a></li>
          <li><a href="#">家族人生</a></li>
          <li><a href="#">AI办公</a></li>
          <li><a href="#">启蒙学院</a></li>
          <li><a href="#">创作广场</a></li>
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
      <div class="login">
        登录/注册
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "HomeCss.css";
</style>