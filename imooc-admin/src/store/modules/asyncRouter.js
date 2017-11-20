import _ from 'lodash'
import { includeRouterMap, asyncRouterMap } from '../../router'

function hasPermission (route, roles) {
  if (roles[route.name] && roles[route.name].admin) {
    return true
  }
  return false
}
function filterAsyncRouter (asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(route, roles)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    } else {
      return false
    }
  })
  return accessedRouters
}
const permission = {
  state: {
    asyncRouter: [],
    routers: [],
    addRouters: []
  },
  mutations: {
    SETASYNCROUTER (state, $routers) {
      state.asyncRouter = $routers
      state.routers = includeRouterMap.concat($routers)
    },
    PERMISSIONROUTER (state, status) {
      state.permission.push(status)
    },
    SETROUTERS (state, routers) {
      state.addRouters = routers
    }
  },
  actions: {
    setAsyncRouter ({ commit }, routers) {
      commit('SETASYNCROUTER', routers)
    },
    buildAsyncRoute ({ commit }, roles) {
      return new Promise(resolve => {
        let accessedRouters
        const deepAsyncRouterMap = _.cloneDeep(asyncRouterMap)
        accessedRouters = filterAsyncRouter(deepAsyncRouterMap, roles)
        commit('SETROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}
export default permission
