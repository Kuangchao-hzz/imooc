<template>
  <div class="banner-swiper-container">
    <swiper :options="swiperOption">
      <swiper-slide><img src="http://img.mukewang.com/590369df0001041812000460.jpg"></swiper-slide>
      <swiper-slide><img src="http://img.mukewang.com/5903688d000141fd12000460.jpg"></swiper-slide>
      <swiper-slide><img src="http://img.mukewang.com/59036a530001aa2912000460.jpg"></swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'banner-swiper',
  data () {
    return {

    }
  },
  props: {
    swiperOption: Object
  }
}
</script>
<style lang="scss">
.banner-swiper-container {
  padding-bottom: 1rem;
  >div {
    height: 10rem;
    .swiper-slide {
      width: 90%;
      border-radius: 0.4rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination{
      span{
        background: #fff;
      }
    }
  }
}
</style>

