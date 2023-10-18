<script>
import Top from "@/components/infomation/Top.vue"
import Loginmenu from "@/components/Login/loginmenu.vue";
import AIDrawing from "@/components/infomation/AIDrawing.vue";
import SoldClass from "@/components/infomation/SoldClass.vue";
export default {
  name: 'HomeInfo',
  props: {
    mes: String
  },
  components: {
    Top,
    Loginmenu,
    AIDrawing,
    SoldClass
  },
}
</script>

<template>
  <div class="info-body">
    <Top></Top>
    <AIDrawing></AIDrawing>
    <SoldClass></SoldClass>
    <footer>
      <div class="footer_inner">
        <h5 class="h5">版权所有:大连态极文化传媒有限公司</h5>
        <h5 class="h5">
          <a href="#">招贤纳士</a>
          <a href="#">联系我们</a>
          <a href="#">关于我们</a>
          <a href="#">在线客服</a>
          工作时间 8:30-22:00
        </h5>
        <h5 class="h5">
          <a href="#">网站备案</a>
          <a href="#">中国互联网举报中心</a>
          <a href="#">版权与免责申明</a>
          <a href="#">营业执照</a>
        </h5>
        <h5 class="h5"> Copyright ©2020-2025 Dalian TaiChi Entertainment Co,Ltd. All Rights Reserved.</h5>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import "infocss.css";
</style>