const Layout = resolve => { require(['../components/Layout/layout.vue'], resolve) }

// 公共组件
export const includeRouterMap = [
  {
    path: '/',
    name: 'layout',
    meta: {
      title: '导航页',
      icon: 'stats-bars'
    },
    component: Layout
  }, {
    path: '/signup',
    name: 'signup',
    component: resolve => { require(['../components/Signup/signup.vue'], resolve) }
  }, {
    path: '/locking',
    name: 'locking',
    component: resolve => { require(['../components/Unlock/unlock.vue'], resolve) }
  }
]
// 异步组件 需要验证权限
export const asyncRouterMap = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '主页',
      icon: 'stats-bars'
    },
    component: Layout,
    children: [
      {
        path: 'recommend',
        name: 'recommend',
        meta: {
          title: '推荐',
          icon: 'stats-bars'
        },
        component: resolve => { require(['../components/Home/children/recommend.vue'], resolve) }
      },
      {
        path: 'course',
        name: 'course',
        meta: {
          title: '课程',
          icon: 'stats-bars'
        },
        component: resolve => { require(['../components/Home/children/recommend.vue'], resolve) }
      }
    ]
  },
  {
    path: '/found',
    name: 'found',
    meta: {
      title: '发现',
      icon: 'stats-bars'
    },
    component: Layout
  },
  {
    path: '/download',
    name: 'download',
    meta: {
      title: '下载',
      icon: 'stats-bars'
    },
    component: Layout
  },
  {
    path: '/my',
    name: 'my',
    meta: {
      title: '我的',
      icon: 'stats-bars'
    },
    component: Layout
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      title: '权限管理',
      icon: 'stats-bars',
      single: true
    },
    component: Layout,
    redirect: '/admin/AdminIndex',
    children: [
      {
        path: 'AdminIndex',
        name: 'AdminIndex',
        meta: {
          title: '权限管理',
          icon: 'stats-bars'
        },
        component: resolve => { require(['../components/Admin/admin.vue'], resolve) }
      }
    ]
  }
]
