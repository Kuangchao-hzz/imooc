<template>
  <Menu ref="sideMenu" theme="dark"
        width="auto"
        @on-select="changeMenu"
        :active-name="selected">
    <template v-for="(menu, index) in data">
      <MenuItem v-if="menu.meta.single || menu.children.length < 1"
                :name="menu.path"
                :key="index">
        <Icon :type="menu.meta.icon"></Icon>
        <span class="layout-text">{{ menu.meta.title }}</span>
      </MenuItem>

      <Submenu :name="menu.name" v-else>
        <template slot="title">
          <Icon :type="menu.meta.icon"></Icon>
          <span class="layout-text">{{ menu.meta.title }}</span>
        </template>
        <template v-for="(child, child_index) in menu.children">
          <MenuItem :name="menu.path + '/' +child.path"
                    :key="child_index">
            <Icon :type="child.meta.icon"></Icon>
            <span class="layout-text">{{ child.meta.title }}</span>
          </MenuItem>
        </template>
      </Submenu>
    </template>
  </Menu>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    props: {
      MenuList: {
        type: Array
      }
    },
    computed: {
      selected () {
        return this.$route.path
      },
      data () {
        return this.MenuListFn(this.MenuList)
      }
    },
    methods: {
      changeMenu (active) {
        this.$router.push({
          path: active
        })
      },
      // 为没有children属性的路由对象添加属性
      MenuListFn (data) {
        data.forEach((_item, _index) => {
          if (!_item.children) {
            Object.assign(_item, {
              children: []
            })
          } else {

          }
        })
        return data
      }
    }
  }
</script>
<style lang="scss" type="text/scss">

</style>
