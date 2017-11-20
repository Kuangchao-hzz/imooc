<template>
  <div class="app-layout">
    <router-view></router-view>
    <div class="mint-tabbar">
      <router-link to="/home" tag="div" class="mint-tab-item">
      <div class="mint-tab-item-icon">
        <span class="icon icon-home"></span>
      </div>
      <div class="mint-tab-item-label">
        首页
      </div>
    </router-link> 
    <router-link to="/found" tag="div" class="mint-tab-item">
      <div class="mint-tab-item-icon">
        <span class="icon icon-browse"></span>
      </div>
      <div class="mint-tab-item-label">
        发现
      </div>
    </router-link> 
    <router-link to="/download" tag="div" class="mint-tab-item">
      <div class="mint-tab-item-icon">
        <span class="icon icon-download"></span>
      </div>
      <div class="mint-tab-item-label">
        下载
      </div>
    </router-link>
     <router-link to="/my" tag="div" class="mint-tab-item">
      <div class="mint-tab-item-icon">
        <span class="icon icon-bussiness-man"></span>
      </div>
      <div class="mint-tab-item-label">
        我的
      </div>
    </router-link>
    <router-link to="/test" tag="div" class="mint-tab-item">
      <div class="mint-tab-item-icon">
        <span class="icon icon-bussiness-man"></span>
      </div>
      <div class="mint-tab-item-label">
        测试
      </div>
    </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isActive: false,
        title: '固定在顶部',
        selected: 'home'
      }
    },
    methods: {
      go () {
        console.log(11)
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scope>
  .app-layout {
    .mint-tabbar {
      border: 1px #ddd solid;
      position: fixed;
      .mint-tab-item-icon {
        width: 2rem;
        height: 2rem;
        .icon {
          font-size: 2rem;
        }
      }
      .mint-tab-item-label {
        font-size: 1rem;
      }
    }
  }

</style>
