<template>
  <div>
    <template v-for="(item, index) in data">
      <div style="text-align: center;" :key="index">
        <Dropdown transfer v-if="item.children.length > 0" placement="right-start" :key="index" @on-click="changeMenu">
          <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
            <Icon :size="20" :color="iconColor" type="key"></Icon>
          </Button>
          <DropdownMenu style="width: 200px;" slot="list">
            <template v-for="(child, i) in item.children">
              <DropdownItem :name="`${item.path}/${child.path}`" :key="i">
                <Icon type="key"></Icon>
                <span style="padding-left:10px;">{{ child.meta.title }}</span>
              </DropdownItem>
            </template>
          </DropdownMenu>
        </Dropdown>
        <Dropdown transfer v-else placement="right-start" :key="index" @on-click="changeMenu">
          <Button @click="changeMenu(item.path)"
                  style="width: 70px;margin-left: -5px;padding:10px 0;"
                  type="text">
            <Icon :size="20" :color="iconColor" type="key"></Icon>
          </Button>
          <DropdownMenu style="width: 200px;" slot="list">
            <DropdownItem :name="`${item.path}`" :key="'d' + index">
              <Icon type="key"></Icon>
              <span style="padding-left:10px;">{{ item.meta.title }}</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </template>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    props: {
      MenuList: {
        type: Array
      },
      iconColor: {
        type: String,
        default: 'white'
      }
    },
    computed: {
      data () {
        return this.MenuListFn(this.MenuList)
      }
    },
    methods: {
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
      },
      changeMenu (active) {
        this.$router.push({
          path: active
        })
      }
    }
  }
</script>
<style lang="scss" type="text/scss">

</style>
