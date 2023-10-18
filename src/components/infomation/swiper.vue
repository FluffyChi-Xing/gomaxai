<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export default {
  name: 'MySwiper',
  data(){
    return {
      list: [
        {id:1,src: 'https://static.runoob.com/images/mix/img_fjords_wide.jpg'},
        {id:2,src: 'https://static.runoob.com/images/mix/img_nature_wide.jpg'},
        {id:3,src: 'https://static.runoob.com/images/mix/img_mountains_wide.jpg'}
      ]
    }
  },
  methods: {
    getswiper(){
      const myswiper = new Swiper('.swiper-container',{
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        paginationClickable: true,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        },
      })
    }
  },
  mounted() {
    this.getswiper()
  }
}
</script>

<template>
  <div id="SwiperCom">
    <!-- 轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list" :key="item.id">
          <img :src="item.src" alt="">
        </div>
      </div>
    </div>
    <!-- 换页器 -->
    <div class="swiper-pagination"></div>
    <!-- 前进/后退 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<style scoped>
#SwiperCom {
  width: 704px;
  height: 238px;
  display: block;
  border-radius: 14px;
  overflow: hidden;
}
.swiper-container {
  width: 704px;
  height: 238px;
}
.swiper-slide img {
   width: 704px;
   height: 238px;
   cursor: pointer;
}
.swiper-slide img:hover {
  opacity: 0.5;
  transition: 2s ease-in-out;
}
.swiper-pagination {
  width: 704px;
}
.swiper-button-next {
  left: 670px;
}
</style>