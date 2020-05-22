import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default options with global component } */)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
