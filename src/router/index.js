import Vue from 'vue'
import Router from 'vue-router'
import FastClick from 'fastclick'

// 组件
import Home from '@/components/home/Home'


// 静态资源引入
import 'static/reset.css'
import 'static/border.css'
import 'static/iconfont.css'

FastClick.attach(document.body)

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
