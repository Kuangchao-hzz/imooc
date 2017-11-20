<template>
  <div :class="[prefixCls + '-container']">
    <div class="tabs-group" :class="{'base-padding': basePadding}" ref="tabs-group">
      <div class="tabs-item" 
      v-for="($item, $index) in paneList" 
      :key="$index"
      @click="handleChange($index)"
      :style="{fontSize: fontSize}"
      :class="tabCls($item)">
      {{$item.label}}
      </div>
      <div class="tab-ink-bar" :style="lnkBarStyle"></div>
    </div>
    <div class="pane-group" :class="{'pane-group-animate': animate}" :style="contentStyleHandle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const prefixCls = 'tabs-list'
export default {
  name: 'tabs-list',
  data () {
    return {
      prefixCls: prefixCls,
      deltaX: 0,
      paneList: [],
      activeKey: this.selected,
      touchEvent: this.touch,
      currentPage: this.page,
      activeSize: {},
      contentStyle: {
        transform: `translateX(0) translateZ(0px)`
      },
      inkBar: {
        width: 16,
        height: 2
      }
    }
  },
  props: {
    page: {
      type: Number,
      default: 0
    },
    proevent: {
      type: [Array],
      default: () => ['swiper-slide', 'swiper-wrapper']
    },
    touch: {
      type: Boolean,
      default: false
    },
    animate: Boolean,
    basePadding: {
      type: Boolean,
      default: true
    },
    selected: String,
    fontSize: String
  },
  computed: {
    // pane过渡动画
    contentStyleHandle () {
      var x = this.paneList.findIndex((pane) => pane.name === this.activeKey)
      var p = x === 0 ? '0%' : `-${x}00%`

      if (x > -1) {
        this.contentStyle = {
          transform: `translateX(${p}) translateZ(0px)`,
          transitionDuration: `300ms`
        }
      }
      return this.contentStyle
    },
    lnkBarStyle () {
      let style = {}
      if (this.paneList.findIndex((pane) => pane.name === this.activeKey) > -1) {
        this.currentPage = this.paneList.findIndex((pane) => pane.name === this.activeKey)
        style = {
          transform: `translateX(${(this.activeSize.offsetLeft) + (this.activeSize.width) / 2 - (this.inkBar.width) / 2}px)`,
          width: `${this.inkBar.width}px`,
          height: `${this.inkBar.height}px`
        }
      }
      return style
    }
  },
  mounted () {
    if (this.touchEvent) {
      this.swperPanFn()
    }
  },
  methods: {
    swperPanFn () {
      this.$nextTick(() => {
        var mc = new Hammer(this.$el)
        mc.on('swipeleft', (e) => {
          console.log(e)
          if (this.proevent.some(d => d === e.target.offsetParent.classList[0])) return false
          this.currentPage++
          if (this.currentPage > -1 && this.currentPage < this.paneList.length) {
            this.activeKey = this.paneList[this.currentPage].name
            this.contentStyle.transform = `translateX(-${this.currentPage}00%) translateZ(0px)`
            this.contentStyle.transitionDuration = `300ms`
          } else {
            this.currentPage = this.paneList.length - 1
          }
        })
        mc.on('swiperight', (e) => {
          if (this.proevent.some(d => d === e.target.offsetParent.classList[0])) return false
          this.currentPage--
          if (this.currentPage > -1) {
            this.activeKey = this.paneList[this.currentPage].name
            this.contentStyle.transform = `translateX(-${this.currentPage}00%) translateZ(0px)`
            this.contentStyle.transitionDuration = `300ms`
          } else {
            this.currentPage = 0
          }
        })
      })
    },
    // 获取pane组件实例
    getPaneData () {
      return this.$children.filter(item => item.$options.name === 'pane')
    },
    // 当前点击对象
    handleChange (index) {
      this.activeKey = this.paneList[index].name
    },
    // 通过getPaneData获取show属性 控制tab-container的状态
    isPaneStatusFn () {
      const panes = this.getPaneData()
      panes.forEach(pane => {
        if (this.animate) {
          return true
        }
        return (pane.show = (pane.currentName === this.activeKey))
      })
    },
    updateLikBar () {
      this.$nextTick(() => {
        var dom = this.$refs['tabs-group'].querySelectorAll('div.tab-avtive')
        this.activeSize = Object.assign(dom[0].getBoundingClientRect(), {
          offsetLeft: dom[0].offsetLeft
        })
      })
    },
    tabCls (item) {
      return [
        {
          'tab-avtive': item.name === this.activeKey
        }
      ]
    },
    updataNav () {
      this.paneList = []
      this.getPaneData().forEach((pane, index) => {
        this.paneList.push({
          label: pane.label,
          name: pane.name
        })
      })
      this.isPaneStatusFn()
      this.updateLikBar()
    }
  },
  watch: {
    deltaX () {
      console.log(this.deltaX)
    },
    activeKey () {
      this.isPaneStatusFn()
      this.updateLikBar()
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-list-container{
  overflow: hidden;
  .tabs-group{
    position: relative;
    box-sizing: border-box;
    border-bottom: 1px #ddd solid;
    >div.tabs-item{
      display: inline-block;
      padding: 10px 0;
      padding-left: 0;
      margin-right: 8px;
    }
    .tab-ink-bar{
      background: red;
      position: absolute;
      left: 0;
      bottom: 6px;
      border-radius: 0.1rem;
      transition: transform .3s ease-in-out;
      transform-origin: 0 0;
    }
  }
  .pane-group{
      &.pane-group-animate{
        display: flex;
        flex-direction: row;
        will-change: transform;
        transition-property: transform;
        transition-duration: 0;
        // transform: translateX(-100%) translateZ(0px);
        .pane-list-container{
          flex-shrink: 0;
          width: 100%;
        }
      }
      
  }
}
</style>
