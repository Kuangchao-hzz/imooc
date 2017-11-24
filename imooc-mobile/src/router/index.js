import Vue from 'vue'
import Router from 'vue-router'
const Layout = resolve => require(['../views/Layout'], resolve)

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-selected',
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: '慕课网',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: '主页',
          component: resolve => require(['../views/home/home.vue'], resolve)
        },
        {
          path: 'found',
          name: '发现',
          component: resolve => require(['../views/found/found.vue'], resolve)
        },
        {
          path: 'download',
          name: '下载',
          component: resolve => require(['../views/home/home.vue'], resolve)
        },
        {
          path: 'my',
          name: '我的',
          component: resolve => require(['../views/my/my.vue'], resolve)
        },
        {
          path: 'test',
          name: '测试',
          component: resolve => require(['../views/test/hammer.vue'], resolve)
        }
      ]
    }
  ]
})
