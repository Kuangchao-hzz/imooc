<template>
  <div class="found-issue-container">
    <scroller :on-refresh="refresh" :on-infinite="infinite">
      <modal-course-show title="热门分类" type="swiper"></modal-course-show>
      <tabs-list selected="tj" fontSize="1.4rem" animate touch>
        <pane label="推荐" name="tj">
          <router-link to="#">
            <issue-list class="base-padding"></issue-list>
          </router-link>
        </pane>
        <pane label="最新" name="zx">
           <router-link to="#">
            <issue-list class="base-padding"></issue-list>
          </router-link>
        </pane>
        <pane label="等待回答" name="ddhd">
           <router-link to="#">
            <issue-list class="base-padding"></issue-list>
          </router-link>
        </pane>
        <pane label="话题" name="ht"></pane>
      </tabs-list>
    </scroller>
  </div>
</template>
<script>
export default {
  name: 'found-issue',
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
<style lang="scss" scoped>
.found-issue-container{

}
</style>

