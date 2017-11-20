import modalCourseShow from './modal-course-show.vue'
import courseList from './course-list.vue'
import courseIcon from './course-icon.vue'
import bannerSwiper from './banner-swiper'
import occupationList from './occupation-list'
import bannerDefault from './banner-default.vue'
import languageList from './language-list.vue'
import tabsList from './tabs-containeres/tabs-list.vue'
import tabsList1 from './tabs-containeres'
import issueList from './issue-list.vue'

const install = function (Vue, config = {}) {
  if (install.installed) return
  Vue.component(modalCourseShow.name, modalCourseShow)
  Vue.component(courseList.name, courseList)
  Vue.component(courseIcon.name, courseIcon)
  Vue.component(bannerSwiper.name, bannerSwiper)
  Vue.component(occupationList.name, occupationList)
  Vue.component(bannerDefault.name, bannerDefault)
  Vue.component(languageList.name, languageList)
  Vue.component(tabsList.name, tabsList)
  Vue.component(issueList.name, issueList)
  Vue.component(tabsList1.name, tabsList1)
  Vue.component(tabsList1.pane.name, tabsList1.pane)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
