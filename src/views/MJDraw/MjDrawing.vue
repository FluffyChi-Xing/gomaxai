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
      <img src="https://cdn-sh1.tcbot.cc/sd/test/1692364906330194865_0.png" alt="">
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
        <img src="@/views/MJDraw/喜欢.svg" alt="" class="img_like_logo">
      </div>
    </div>
  </li>
</template>

<style scoped>
@import "MjCss.css";
</style>