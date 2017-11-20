<template>
  <div class="app-container">
    <scroller :on-refresh="refresh" :on-infinite="infinite">
      <banner-default></banner-default>
      <language-list class="base-padding"></language-list>
      <tabs-list selected="tj"
      fontSize="1.2rem" 
      touch
      animate>
        <pane label="最新推荐" name="tj">
          <course-list 
          v-for="($item, $index) in 10" 
          :key="$index"
          direction="row-reverse" 
          picWidth="20" 
          someWidth
          border
            class="base-padding">
            <strong slot="strong">20个高级Java面试题汇总</strong>
            <small slot="small">
              <span>131浏览</span> · <span>5推荐</span> · <span>0评论</span>
            </small>
          </course-list>
        </pane>
        <pane label="最新手记" name="sj">
          <course-list 
          v-for="($item, $index) in 10" 
          :key="$index" 
          direction="row-reverse" 
          picWidth="20" 
          someWidth 
          border  
          class="base-padding">
            <strong slot="strong">20个高级Web面试题汇总</strong>
            <small slot="small">
              <span>131浏览</span> · <span>5推荐</span> · <span>0评论</span>
            </small>
          </course-list>
        </pane>
      </tabs-list>
    </scroller>
</div>
</template>
<script>
export default {
  name: 'found-note',
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

</style>

