// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// vue-router
import router from './router' 
// vuex
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import FastClick from 'fastclick'

// 静态资源引入
import 'static/reset.css'
import 'static/border.css'
import 'static/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
FastClick.attach(document.body)

let vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})