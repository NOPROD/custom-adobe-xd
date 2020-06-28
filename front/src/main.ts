import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from '@/i18n'

Vue.config.productionTip = false

Vue.use(VueI18n)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
