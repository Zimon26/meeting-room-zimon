<template>
  <div id="app">
    <!-- <h1>我是app组件</h1> -->
    <router-view></router-view>
  </div>

</template>

<script>
// import Login from '@/views/Login.vue'
export default {
  components: {
    // Login
  }
}
</script>

<style lang="less" scoped>
html body,
.router-view {
  width: 100%;
  height: 100%;
}
</style>