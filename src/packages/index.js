import Drawer from './Drawer.vue'

export default {
  install: function (Vue, { zIndex = 200, name = Drawer.name } = {}) {
    if (zIndex) {
      Vue.prototype.$chDrawerZIndex = zIndex
    }
    Vue.component(name, Drawer)
  }
}
