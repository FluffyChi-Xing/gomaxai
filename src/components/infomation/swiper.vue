<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export default {
  name: 'MySwiper',
  data(){
    return {
      list: [
        {id:1,src: 'https://tc.cos.cdn.jchdnet.cn/tables/8828abaa-82e1-4cee-9b45-1015732f568f_1688992140120.png'},
        {id:2,src: 'https://tc.cos.cdn.jchdnet.cn/tables/9a94cb8f-2719-4759-b3f5-e4a044a6988a_1688992189333.png'},
        {id:3,src: 'https://tc.cos.cdn.jchdnet.cn/tables/0f8c54d7-75b5-4d10-ae4a-256199f0fa39_1689158875985.png'}
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