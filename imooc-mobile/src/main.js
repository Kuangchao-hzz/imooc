// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/* eslint-disable no-unused-vars */
import Hammer from 'hammerjs'
import router from './router'
import MintUI from 'mint-ui'
import Common from './components'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueScroller from 'vue-scroller'
import 'mint-ui/lib/style.css'
require('swiper/dist/css/swiper.css')
import 'normalize.css'

Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
Vue.use(Common)
Vue.use(VueScroller)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
