import Icon from './icon/icon.vue'
import dsSelect from './ds-select/ds-select.vue'
const components = [
  Icon,
  dsSelect
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
