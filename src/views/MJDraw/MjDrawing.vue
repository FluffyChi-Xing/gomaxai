<script>
export default {
  name: 'MjDraw',
  props: {
  }
}
</script>

<template>
  <li class="MjLi">
    <div class="img_bk">
      <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg" alt="">
    </div>
    <div class="img_price">
      <div class="img_money"></div>
      <span class="img_span">10</span>
    </div>
    <h5>鱼缸</h5>
    <div class="img_user">
      <div class="img_avater"></div>
      <span class="user_id">xxxx</span>
      <div class="img_like">
        <img src="./喜欢.svg" alt="" class="img_like_logo">
      </div>
    </div>
  </li>
</template>

<style scoped>
@import "MjCss.css";
</style>