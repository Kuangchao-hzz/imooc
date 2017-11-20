<template>
  <div class="app-view-home">
    <tabs-list selected="tj" fontSize="1.4rem" animate touch>
      <pane label="推荐" name="tj" proevent="">
        <recommend></recommend>
      </pane>
      <pane label="课程" name="kc">
        <course></course>
      </pane>
      <pane label="实战" name="sz">
        <example></example>
      </pane>
      <pane label="职业路径" name="zylj">
        <occupation></occupation>
      </pane>
    </tabs-list>
  </div>
</template>

<script>
import recommend from './childrens/recommend.vue'
import course from './childrens/course.vue'
import example from './childrens/example.vue'
import occupation from './childrens/occupation.vue'
export default {
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  },
  components: {
    recommend,
    course,
    example,
    occupation
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    this.active(to)
    next()
  }
}
</script>

<style lang="scss" type="text/scss" scope>
.app-view-home {
  .tabs-list-container{
    height: 100%;
    .pane-group{
      height: 100%;
      box-sizing: border-box;
      border-bottom: 40px transparent solid;
    }
  }
}
</style>
