<template>
<div class="views-hammer-test" id="viewsHammerTest" ref="viewsHammerTest">
 {{ msg }}
</div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'this is hammer.js demo'
    }
  },
  mounted () {
      // http://blog.csdn.net/kongjiea/article/details/43016085
    var mc = new Hammer(this.$refs['viewsHammerTest'])
    // mc.on('tap', () => {
    //   alert('this is tap event')
    // })
    // 在指定的dom区域内，一个手指放下并移动事件，即触屏中的拖动事件。如：左拖动、右拖动等，如手要上使用QQ时向右滑动出现功能菜单的效果
    mc.on('pan', (e) => {
      alert(`this is a pan event`)
    })
    // 在指定的dom区域内，两个手指（默认为两个手指，多指触控需要单独设置）或多个手指相对（越来越近）移动或相向（越来越远）移动时事件。
    // mc.add(new Hammer.Pinch())
    // mc.on('pinchin', (e) => {
    //   alert('this is pinch event')
    // })
    //  Press事件：在指定的dom区域内触屏版本的点击事件，这个事件相当于PC端的Click事件，该不能包含任何的移动，最小按压时间为500毫秒，常用于我们在手机上用的“复制、粘贴”等功能。
    // mc.on('press', (e) => {
    //   alert('this is press event, 500ms')
    // })
    // 在指定的dom区域内，当两个手指或更多手指成圆型旋转时触发（就像两个手指拧螺丝一样）。
    // mc.on('rotate', (e) => {
    //   alert('this is routate event')
    // })
    // Swipe事件：在指定的dom区域内，一个手指快速的在触屏上滑动。即我们平时用到最多的滑动事件。
    // mc.on('swich', (e) => {
    //   alert('this is swich event')
    // })
  }
}
</script>
<style lang="scss" scoped>
.views-hammer-test{
    height: 100%;
    width: 100%;
}
</style>
