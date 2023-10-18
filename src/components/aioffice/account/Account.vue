<script setup>
import {ref} from "vue";

const name = ref('用户名')
const tail = ref('我是一条小尾巴~')
</script>

<template>
  <div class="background">
    <div class="top">
      <div class="top-bottom">
        我是广告
      </div>
      <div class="user-avatar">
        <div class="userlogo"></div>
        <div class="user-id">
          {{name}}
        </div>
        <div class="user-tail">
          {{tail}}
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-left"></div>
      <div class="bottom-right"></div>
    </div>
  </div>
</template>

<style scoped>
@import "accountcss.css";
</style>