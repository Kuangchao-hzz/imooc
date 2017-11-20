<template>
  <div class="home-occupation-container">
    <scroller :on-refresh="refresh" :on-infinite="infinite">
       <course-icon :data="occItemData" :slidesPerView="3.5"></course-icon>
        <occupation-list class="base-padding"></occupation-list>
    </scroller>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '职业路径',
      occItemData: [
        {
          label: 'Web前端攻城狮'
        },
        {
          label: 'Java攻城狮'
        },
        {
          label: 'Android'
        },
        {
          label: 'PHP攻城狮'
        },
        {
          label: 'IOS攻城狮'
        }
      ]
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

</style>

