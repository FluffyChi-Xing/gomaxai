<script>
import MjDrawing from "@/views/MJDraw/MjDrawing.vue";
export default {
  name: 'AiDraw',
  props: {
    mes: String
  },
  components: {
    MjDrawing
  },
}
</script>

<template>
  <div class="DrawingBody">
    <div class="info_choice container">
      <div class="choice_bk">
        <div class="two_choice first_color choice_bottom" style="margin-left: 7px">MJ绘画广场</div>
        <div class="two_choice second_color">SD绘画广场</div>
      </div>
    </div>
    <ul class="more_select_left">
      <li style="margin-right: 24px">
        <div>
          排序:
        </div>
        <div class="btn-group">
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" style="width: 48px;
                        height: 20px;text-align: center;line-height: 20px;font-size: 14px;padding: 0;border-radius: 10px">
            推荐 <span class="caret"></span></button>
          <ul class="dropdown-menu" role="menu">
            <li style="width: 158px"><a href="#">xxxxxx</a></li>
            <li style="width: 158px"><a href="#">xxxxxx</a></li>
            <li style="width: 158px"><a href="#">xxxxxx</a></li>
            <li style="width: 158px"><a href="#">xxxxxx</a></li>
          </ul>
        </div>
      </li>
      <li>
        <div>
          价格:
        </div>
        <div class="btn-group">
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" style="width: 48px;
                        height: 20px;text-align: center;line-height: 20px;font-size: 14px;padding: 0;border-radius: 10px">
            推荐 <span class="caret"></span></button>
          <ul class="dropdown-menu" role="menu">
            <li style="width: 158px"><a href="#">xxxxxx</a></li>
            <li style="width: 158px"><a href="#">xxxxxx</a></li>
            <li style="width: 158px"><a href="#">xxxxxx</a></li>
            <li style="width: 158px"><a href="#">xxxxxx</a></li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="imhUl">
      <ul>
        <MjDrawing></MjDrawing>
        <MjDrawing></MjDrawing>
        <MjDrawing></MjDrawing>
        <MjDrawing></MjDrawing>
        <MjDrawing></MjDrawing>
        <MjDrawing></MjDrawing>
        <MjDrawing></MjDrawing>
        <MjDrawing></MjDrawing>
        <MjDrawing></MjDrawing>
        <MjDrawing></MjDrawing>
        <MjDrawing></MjDrawing>
        <MjDrawing></MjDrawing>
        <MjDrawing></MjDrawing>
        <MjDrawing></MjDrawing>
        <MjDrawing></MjDrawing>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import "AIDraw.css";
</style>