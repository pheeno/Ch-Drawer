import Vue from 'vue'
import App from './App.vue'
import ChDrawer from './packages'
Vue.use(ChDrawer)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
