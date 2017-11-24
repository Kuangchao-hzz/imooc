<template>
  <span class="icon" style="display: inline-block">
    <i :class="classes" :style="styles"></i>
    <span :style="badgeSly" v-if="badge">{{badge}}</span>
  </span>
</template>
<script>
  export default {
    name: 'Icon',
    props: {
      type: String,
      size: [Number, String],
      color: String,
      badge: String
    },
    computed: {
      classes () {
        return `${this.type}`
      },
      styles () {
        let style = {}
        if (this.size) {
          style['font-size'] = `${this.size}px`
        }
        if (this.color) {
          style.color = this.color
        }
        return style
      },
      badgeSly () {
        let style = {}
        if (this.badge) {
          style.position = 'relative'
          style.left = '0'
          style.top = '-10px'
          style.size = '1rem'
          style.transform = 'scale(.6)'
          style.fontStyle = 'normal'
          style.borderRadius = '.4rem'
          style.display = 'black'
        }
        return style
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>

</style>
