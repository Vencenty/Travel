import Vue from 'vue'
import Router from 'vue-router'

// 组件
import Home from '@/components/home/Home'
import City from '@/components/city/City'


Vue.use(Router)
export default new Router({
  mode: 'history',
  // linkActiveClass: '',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
