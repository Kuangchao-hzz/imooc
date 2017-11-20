
<template>
  <div class="app-home-container">
    {{title}}
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data () {
      return {
        title: '首页'
      }
    }
  }
</script>
<style lang="scss" type="text/scss">
  .app-home-container{

  }
</style>
