<template>
  <div class="app-view-found">
    <tabs-list selected="sj" fontSize="1.4rem" animate>
      <pane label="手记" name="sj">
        <foundNote></foundNote>
      </pane>
      <pane label="猿问" name="yw">
        <foundIssue></foundIssue>
      </pane>
      <pane label="动态" name="dt">
        <foundDynamic></foundDynamic>
      </pane>
    </tabs-list>
  </div>
</template>

<script>
import foundNote from './childrens/note.vue'
import foundIssue from './childrens/issue.vue'
import foundDynamic from './childrens/dynamic.vue'
export default {
  data () {
    return {
      title: '首页',
      activeNo: 1,
      underlineStyle: {},
      headers: [
        { lable: '手记', id: 1, show: false },
        { lable: '猿问', id: 2, show: false },
        { lable: '动态', id: 3, show: false }
      ]
    }
  },
  methods: {

  },
  components: {
    foundNote,
    foundIssue,
    foundDynamic
  }
}
</script>

<style lang="scss" type="text/scss" scope>
.app-view-found{
  height: 100%;
  >.tabs-list-container{
    height: 100%;
    >.pane-group{
      height: 100%;
      box-sizing: border-box;
      border-bottom: 38px transparent solid;
    }
  }
  .language-list-container{
    border-bottom: 10px #ddd solid;
  }
}
.app-header {
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  .header-items-group {
    position: relative;
    .header-item {
      display: inline-block;
      font-size: 1.4rem;
      padding: 1rem;
      color: #999;
      &.active {
        color: #333;
      }
    }
  }
}
</style>
