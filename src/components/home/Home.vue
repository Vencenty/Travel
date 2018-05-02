<template>
  <div>
      <home-header :city="city"></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommend :list="recommendList"></home-recommend>
      <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import axios from 'axios'

  import HomeHeader from './Header'
  import HomeSwiper from './Swiper'
  import HomeIcons from './Icons'
  import HomeRecommend from './Recommend'
  import HomeWeekend from './Weekend'

  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    data () {
      return {
        city: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    mounted () {
      let debug = axios.get('api/index.json').then((response)=>{
        response = response.data
        if(response.errno === 0) {
          let data = response.data
          this.city = data.city
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      });
    }
  }
</script>

<style scoped>

</style>