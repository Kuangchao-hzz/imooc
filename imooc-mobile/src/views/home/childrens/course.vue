<template>
  <div class="home-couse-container">
    <scroller :on-refresh="refresh" :on-infinite="infinite" style="height: 100%;">
      <course-icon></course-icon>
      <div class="course-list-warp">
        <course-list class="base-padding" v-for="($item, $index) in 15" :key="$index">
          <strong slot="strong">RxJava与RxAndroid基础入门</strong>
          <small slot="small"><span>中级</span> · <span>667人在学</span></small>
        </course-list>
      </div>
  </scroller>
</div>
</template>
<script>
export default {
  data () {
    return {

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
<style lang="scss" scoped>
.home-couse-container{
  height: 100%;
}
</style>

