<template>
  <div :class="[prefixCls + '-component', {border: border}]" ref="course-list-component">
    <div class="modal-body" :style="{ flexDirection: direction}" >
      <div :class="[prefixCls + '__image']" :style="{width: picWidth + '%'}">
         <img src="http://img.mukewang.com/590369df0001041812000460.jpg">
      </div>
      <div :class="[prefixCls] + '__desc'" :style="{width: (100 - picWidth - gutter) + '%'}">
        <slot name="strong"></slot>
        <slot name="small"></slot>
      </div>
    </div>    
  </div> 
</template>
<script>
/**
 * course-list
 * @module components/course-list
 * @param {String} [direction="initial"] - 方向
 */
const prefixCls = 'course-list'
export default {
  name: 'course-list',
  data () {
    return {
      prefixCls: prefixCls
    }
  },
  mounted () {
    this.handleSomeWidth
  },
  computed: {
    handleSomeWidth () {
      if (this.someWidth && this.picWidth) {
        this.$nextTick(() => {
          var d = this.$refs['course-list-component'].getElementsByClassName(`${this.prefixCls}__image`)[0]
          d.style.height = d.getBoundingClientRect().width + 'px'
        })
      }
    }
  },
  methods: {

  },
  props: {
    border: {
      type: [Boolean],
      default: false
    },
    someWidth: {
      type: [Boolean],
      default: false
    },
    direction: {
      type: String,
      default: () => 'initial'
    },
    picWidth: {
      type: String,
      default: () => '35'
    },
    gutter: {
      type: String,
      default: () => '3'
    }
  }
}
</script>
<style lang="scss" scoped>
.course-list-component{
  background: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  &.border{
    border-bottom: 1px #ddd solid;
  }
  &:last-of-type{
      margin-bottom: 0;
    }
  .modal-body{
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    >div{
      &.course-list__image{
        width: 35%;
        height: 6rem;
        border-radius: 0.4rem;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
        }
      }
      &.course-list__desc{
        width: 62%;
        strong{
          padding-top: 1rem;
          font-size: 1.2rem;
          display: block;
        }
        small{
          padding: 1rem 0;
          display: block;
        }
      }
    }
  }
}
</style>
