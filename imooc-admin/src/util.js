let util = {
  // 如果路由地址发生变化 就更新当前路由对象
  currentPathFn (vm, router) {
    vm.$store.dispatch('setCurrentPath', router)
  }
}

export default util
