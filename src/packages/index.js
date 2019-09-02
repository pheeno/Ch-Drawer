import Drawer from './Drawer.vue'

export default {
  install: function (Vue, { zIndex = 200 } = {}) {
    if (zIndex) {
      Vue.prototype.$chDrawerZIndex = zIndex
    }
    Vue.component(Drawer.name, Drawer)
  }
}
