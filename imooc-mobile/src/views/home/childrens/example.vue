<template>
  <div class="home-example-container">
    <scroller :on-refresh="refresh" :on-infinite="infinite"></scroller>
    <div class="banner-swiper">
      <swiper :options="swiperOption">
        <swiper-slide><img src="http://img.mukewang.com/590369df0001041812000460.jpg"></swiper-slide>
        <swiper-slide><img src="http://img.mukewang.com/5903688d000141fd12000460.jpg"></swiper-slide>
        <swiper-slide><img src="http://img.mukewang.com/59036a530001aa2912000460.jpg"></swiper-slide>
      </swiper>
    </div>
    <div> 
      <course-icon></course-icon>
    </div>
    <div>
      <course-list class="base-padding">
        <strong slot="strong">RxJava与RxAndroid基础入门</strong>
        <small slot="small"><span>中级</span> · <span>667人在学</span></small>
      </course-list>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '实战',
      swiperOption: {
        autoplay: 3000,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10,
        loop: true
      }
    }
  },
  methods: {
    refresh: function (done) {
      var self = this
      setTimeout(function () {
        var start = self.top - 1
        for (var i = start; i > start - 10; i--) {
          self.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
        }
        self.top = self.top - 10
        done()
      }, 1500)
    },
    infinite: function (done) {
      setTimeout(() => {
        done('没有更多数据')
      }, 1500)
    }
  }
}
</script>
<style lang="scss">
  .banner-swiper {
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

