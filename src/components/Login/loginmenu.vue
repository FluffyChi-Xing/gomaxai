<script>
export default {
  name: 'LoginMenu',
  props: {
    Show: Boolean
  },
  methods: {

  },
  inject: ['isShow'],
  created() {
    this.Show = this.isShow
  }
}
</script>

<template>
  <div class="LoginBody" v-show="Show">

  </div>
</template>

<style scoped>
.LoginBody {
  width: 500px;
  height: 300px;
  display: block;
  position: relative;
  background-color: greenyellow;
}
</style>