<template>
  <div class="home-recommend">
    <scroller :on-refresh="refresh" :on-infinite="infinite" style="height: 100%;">
      <banner-swiper :swiperOption="swiperOption"></banner-swiper>
      <div class="modal-recommend">
        <modal-course-show title="实战推荐" type="hybrid"></modal-course-show>
        <modal-course-show title="新上好课" type="default"></modal-course-show>
        <modal-course-show title="新手入门" type="swiper"></modal-course-show>
        <modal-course-show title="技能提升" type="swiper"></modal-course-show>
        <modal-course-show title="前沿技术" type="swiper"></modal-course-show>
      </div>
    </scroller>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '推荐',
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
        done('没有跟多数据')
      }, 1500)
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss">
.home-recommend{
  height: 100%;
  .modal-recommend{
    background: #fff;
    >div{
      &:nth-child(odd){
        background: #f1f1f1;
        box-shadow: 0 0 5px rgba(0, 0, 0, .3)
      }
    }
  }
  .modal-recommend{
    background: #fff;
    >div{
      &:nth-child(odd){
        background: #f1f1f1;
        box-shadow: 0 0 5px rgba(0, 0, 0, .3)
      }
    }
  }
}
</style>

