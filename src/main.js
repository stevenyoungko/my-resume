import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './css/application.css.sass'
import './landing_page_scripts.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
