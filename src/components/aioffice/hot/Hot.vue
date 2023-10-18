<script setup>
import {ref} from "vue";

const num = ref(20)
</script>

<template>
  <div class="background">
    <div v-for="item in num" class="choice">
      <span class="logo"></span>
      <div class="text">
        <div>xxx-GPT</div>
        <div>一款AI驱动的xxxxxxx</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "hotcss.css";
</style>