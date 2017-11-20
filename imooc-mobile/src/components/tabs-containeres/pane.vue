<template>
  <div class="pane-list-container" v-show="show">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'pane',
  data () {
    return {
      show: true,
      currentName: this.name
    }
  },
  props: {
    label: {
      type: String
    },
    name: {
      type: String
    }
  },
  mounted () {
    this.updateNav()
  },
  methods: {
    updateNav () {
      this.$parent.updataNav()
    }
  },
  watch: {
    label () {
      this.updateNav()
    }
  }
}
</script>
<style lang="scss" scoped>
.pane-list-container{
  position: relative;
}
</style>

