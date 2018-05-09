// 组件
import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Detail from '@/components/detail/Detail'

export default [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '旅游网站demo'
      }
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
]
