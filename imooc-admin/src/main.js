// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import Router from 'vue-router'
import Swal from 'sweetalert2'
import Moment from 'moment'
import axios from './api'
import { includeRouterMap, asyncRouterMap } from './router'
import store from './store'
import Util from './util'
import Cookies from 'js-cookie'
// http://www.jianshu.com/p/7436e40ac5d1
/* eslint-disable no-unused-vars */
import lodash from 'lodash'

import 'normalize.css'
import 'iview/dist/styles/iview.css'

if (process.env.NODE_ENV === 'development') {
  require('./mock.js')
}

Vue.use(iView)
Vue.use(Router)
Vue.use(axios)

global.cookie = Cookies
global.swal = Swal
global.moment = Moment
global._ = lodash
Vue.prototype.$http = axios
Vue.prototype.util = Util

const routerConfig = {
  // mode: 'history',
  routes: includeRouterMap
}

const router = new Router(routerConfig)

const whiteList = ['/signup']
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  // 判断当前是否为锁定状态 如果当前状态为锁定状态, 跳转的除自身以外其它的地址则阻止跳转
  if (cookie.get('unlock') === '1' && to.name !== 'locking') {
    next(false)
    router.replace({
      name: 'locking'
    })
  } else if (cookie.get('unlock') === '0' && to.name === 'locking') {
    next(false)
  } else {
    if (cookie.get('auths')) {
      if (to.path === '/signup') {
        next({ path: '/' })
      } else {
        var auths = JSON.parse(cookie.get('auths'))
        if (auths && store.state.asyncRouter.addRouters.length === 0) {
          store.dispatch('buildAsyncRoute', auths).then(() => {
            router.addRoutes(store.getters.addRouters)
            next({...to})
          })
        } else {
          next()
        }
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
        store.commit('SETROUTERS', [])
        next()
      } else {
        store.commit('SETROUTERS', [])
        next('/signup')
      }
    }
  }
  iView.LoadingBar.finish()
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  created () {
    this.$store.dispatch('setAsyncRouter', asyncRouterMap)
  },
  mounted () {

  },
  components: { App }
})
