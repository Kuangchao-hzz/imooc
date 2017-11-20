<template>
  <div class="banner-default-container">
    <div class="pic">
      <img src="http://img.mukewang.com/590369df0001041812000460.jpg">
    </div>
    <div class="bar">
      <p>{{text}}</p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'banner-default',
  data () {
    return {
      text: '【挨踢狗吐槽大会】 是时候说说 #挨踢狗们的の国庆假期#了11111111111111'
    }
  }
}
</script>
<style lang="scss" scoped>
.banner-default-container{
  height: 10rem;
  position: relative;
  .pic{
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .bar{
    width: 100%;
    color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    p{
      padding: 0 2rem;
      line-height: 1.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
