import Vue from 'vue'
import Vuex from 'vuex'
import asyncRouter from './modules/asyncRouter'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lockConfig: {
      background: '#667aa6'
    },
    isFullScreen: false,
    currentPath: [],
    userAvatar: 'http://t1.niutuku.com/960/45/45-439758.jpg'
  },
  mutations: {
    SETCURRENTPATH (state, router) {
      state.currentPath = router
    },
    SETLOCKCONFIG (state, status) {
      Object.assign(state.lockConfig, status)
    },
    HANDLEFULLSCREEN (state, status) {
      let main = document.body
      if (state.isFullScreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (main.requestFullscreen) {
          main.requestFullscreen()
        } else if (main.mozRequestFullScreen) {
          main.mozRequestFullScreen()
        } else if (main.webkitRequestFullScreen) {
          main.webkitRequestFullScreen()
        } else if (main.msRequestFullscreen) {
          main.msRequestFullscreen()
        }
      }
      state.isFullScreen = status
    }
  },
  actions: {
    setCurrentPath ({ commit }, router) {
      commit('SETCURRENTPATH', router)
    },
    // 锁屏功能配置
    setLockConfig ({ commit }, status) {
      commit('SETLOCKCONFIG', status)
    },
    // 全屏功能
    handleFullScreen ({ commit }, status) {
      commit('HANDLEFULLSCREEN', status)
    }
  },
  modules: {
    asyncRouter
  },
  getters
})

export default store
