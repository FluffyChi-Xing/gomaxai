<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import MySwiper from './swiper.vue'

export default {
  name: 'TopAd',
  components: {
    MySwiper
  },
  data(){
    return {
      isShow: false
    }
  },
  methods: {
    login(){
      this.isShow = true
      console.log(this.isShow)
    }
  },
  provide(){
    return {
      isShow: this.isShow,
    }
  }
}
</script>

<template>
  <div class="main_top">
    <MySwiper></MySwiper>
    <!--用户-->
    <div class="main_user">
      <div class="user_top">
        <div class="user_avater">
          <img src="../../assets/user.png" alt=""  @click="login">
          <span>登录/注册</span>
        </div>
        <div class="user_logo"></div>
      </div>
      <div class="user_center">
        <div class="user_info">
          <div class="user_info_top">0</div>
          <div class="user_info_bot">我的鸮币</div>
        </div>
        <div class="user_info">
          <div class="user_info_top">0</div>
          <div class="user_info_bot">我的关注</div>
        </div>
        <div class="user_info">
          <div class="user_info_top">0</div>
          <div class="user_info_bot">我的收藏</div>
        </div>
      </div>
      <div class="user_btns">
        <button class="btn user_btn_1">鸮币签到</button>
        <button class="btn user_btn_2">立即充值</button>
      </div>
    </div>
    <!--广告-->
    <div class="main_ad">
      <div>
        <a href="#">
          <img src="https://jchd-chat.oss-cn-hangzhou.aliyuncs.com/png/banner1-ad79d35a.png" alt="">
        </a>
      </div>
      <div style="margin-top: 30px">
        <a href="#">
          <img src="https://jchd-chat.oss-cn-hangzhou.aliyuncs.com/png/banner2-bbac4bf9.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "TopCss.css";
</style>