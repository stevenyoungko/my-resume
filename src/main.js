import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import VueParticles from 'vue-particles'
import App from './App.vue'
import router from './router.js'
import './css/application.css.sass'
import './landing_page_scripts.js'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

Vue.config.productionTip = false
Vue.use(VueScrollTo, {
  container: "body",
  duration: 1000,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.use(VueParticles)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
