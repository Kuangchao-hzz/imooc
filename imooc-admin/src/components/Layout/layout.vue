<template>
  <div class="app-layout-container">
    <!--侧边栏-->
    <div class="sidebar-container"
         :style="{width: hideMenuText? '60px':'200px', background: '#495060'}">
      <sidebarMenu :MenuList="MenuList" v-if="!hideMenuText"></sidebarMenu>
      <sidebarMenuShrink :MenuList="MenuList" v-else></sidebarMenuShrink>
    </div>
    <!--头部导航条-->
    <div class="header-container" :style="{left: hideMenuText?'60px':'200px'}">
      <!--侧边菜单栏缩放按钮-->
      <Button type="text" @click="toggleClick">
        <Icon type="navicon" size="32"></Icon>
      </Button>
      <!--导航面包屑-->
      <Breadcrumb>
        <BreadcrumbItem href="/">导航页</BreadcrumbItem>
        <BreadcrumbItem
          v-for="(breadcrumb, _breIndex) in breadcrumbHandle"
          :key="_breIndex"
          :href="`${_breIndex === breadcrumbHandle.length - 1 ? breadcrumb.path : ''}`">{{ breadcrumb.meta.title }}</BreadcrumbItem>
      </Breadcrumb>
      <!--头像-->
      <div class="dropdown-menu-con">
        <Row type="flex" justify="end" align="middle" :gutter="15">
          <!--全屏-->
          <div @click="fullScreenFn" class="full-screen-btn-con">
            <Tooltip :content="isFullScreen ? '退出全屏' : '全屏'" placement="bottom">
              <Icon :type="isFullScreen ? 'arrow-shrink' : 'arrow-expand'" :size="23"></Icon>
            </Tooltip>
          </div>
          <!--锁屏按钮-->
          <div @click="lockScreenFn" class="lock-screen-btn-con">
            <Tooltip content="锁屏" placement="bottom">
              <Icon type="locked" :size="20"></Icon>
            </Tooltip>
          </div>
          <!--未读消息-->
          <div @click="showMessageFn" class="message-con">
            <Tooltip :content="messageCount > 0 ? '有' + messageCount + '条未读消息' : '无未读消息'" placement="bottom">
              <Badge :count="messageCount" dot>
                <Icon type="ios-bell" :size="22"></Icon>
              </Badge>
            </Tooltip>
          </div>
          <Dropdown trigger="click" @on-click="handleClickUserDropdown">
            <a href="javascript:void(0)">
              <span class="main-user-name">{{ userName }}</span>
              <Icon type="arrow-down-b"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="ownSpace">个人中心</DropdownItem>
              <DropdownItem name="logout" divided>退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Avatar :src="avatarPath" style="background: #619fe7;margin-left: 10px;"></Avatar>
        </Row>
      </div>
    </div>
    <!--内容-->
    <div class="page-container" :style="{left: hideMenuText?'60px':'200px'}">
      <router-view></router-view>
    </div>
    <!--锁屏-->
    <div class="lock_screen_back" id="lock_screen_back"></div>
  </div>
</template>
<script>
  import sidebarMenu from './sidebarMenu.vue'
  import sidebarMenuShrink from './sidebarMenuShrink.vue'
  export default {
    data () {
      return {
        avatarPath: this.$store.state.userAvatar,
        userName: 'admin',
        spanLeft: 5,
        spanRight: 19,
        hideMenuText: false,
        lockScreenSize: '',
        messageCount: 0
      }
    },
    created () {
      this.MenuList = this.$store.getters.addRouters
    },
    mounted () {
      let lockScreenBack = document.getElementById('lock_screen_back')
      let x = document.body.clientWidth
      let y = document.body.clientHeight
      let r = Math.sqrt(x * x + y * y)
      let size = parseInt(r)
      this.lockScreenSize = size
      lockScreenBack.style.zIndex = '1'
      lockScreenBack.style.width = lockScreenBack.style.height = size + 'px'
      lockScreenBack.style.boxShadow = `0 0 0 0 ${this.$store.state.lockConfig.background} inset`
      this.util.currentPathFn(this, this.$route.matched)
    },
    computed: {
      // 全屏状态
      isFullScreen () {
        return this.$store.state.isFullScreen
      },
      // 根据url 获取当前路由对象, 更新面包屑
      breadcrumbHandle () {
        let curPath = this.$store.state.currentPath
        if (curPath.length === 1 && curPath[0].path === '') {
          return []
        } else {
          return curPath
        }
      },
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24
      }
    },
    methods: {
      // 未读消息事件
      showMessageFn (msg) {
        console.log(msg)
      },
      // 全屏
      fullScreenFn () {
        this.$store.dispatch('handleFullScreen', !this.$store.state.isFullScreen)
      },
      // 锁屏
      lockScreenFn () {
        let lockScreenBack = document.getElementById('lock_screen_back')
        lockScreenBack.style.transition = 'all 3s'
        lockScreenBack.style.zIndex = '9998'
        lockScreenBack.style.boxShadow = '0 0 0 ' + this.lockScreenSize + 'px #667aa6 inset'
        setTimeout(() => {
          cookie.set('unlock', 1)
          this.$router.push('/locking')
        }, 1000)
      },
      handleClickUserDropdown (name) {
        if (name === 'logout') {
          this.$http.userLogout().then(res => {
            cookie.remove('auths')
            this.$router.push('/signup')
          })
        }
      },
      toggleClick () {
        this.hideMenuText = !this.hideMenuText
      }
    },
    watch: {
      '$route' () {
        this.util.currentPathFn(this, this.$route.matched)
      }
    },
    components: {
      sidebarMenu,
      sidebarMenuShrink
    }
  }
</script>
<style lang="scss" type="text/scss">
.app-layout-container{
  height: 100%;
  >div{
    transition: all .3s;
  }
  .sidebar-container{
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    .ivu-menu{
      height: 100%;
    }
  }
  .header-container{
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    .ivu-btn{
      display: inline-block;
    }
    .ivu-breadcrumb{
      display: inline-block;
    }
    .dropdown-menu-con{
      position: absolute;
      right: 14px;
      top: 50%;
      transform: translateY(-50%);
      >div>*{
        margin-left: 15px;
        cursor: pointer;
      }
      .lock-screen-btn-con{

      }
    }
  }
  .page-container{
    background: #f0f0f0;
    overflow: auto;
    position: fixed;
    top: 68px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  .lock_screen_back{
    border-radius: 50%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
