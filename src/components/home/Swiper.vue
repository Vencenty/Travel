<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.thumb">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList: [
          {
            id: '10001',
            thumb: 'http://img1.qunarzz.com/piao/fusion/1804/fa/1932440360b42e02.jpg_640x200_07b74613.jpg'
          },
          {
            id: '10002',
            thumb: 'http://img1.qunarzz.com/piao/fusion/1804/15/9250dbc86a456302.jpg_640x200_4c7220d4.jpg'
          },
          {
            id: '10003',
            thumb: 'http://img1.qunarzz.com/piao/fusion/1804/8c/9a3ebf07a1570702.jpg_640x200_53893abc.jpg'
          },
          {
            id: '10004',
            thumb: 'http://img1.qunarzz.com/piao/fusion/1804/8b/f7f0585bbb539202.jpg_640x200_c4096429.jpg'
          },
          {
            id: '10005',
            thumb: 'http://img1.qunarzz.com/piao/fusion/1804/94/619b7b0a6d2e0a02.jpg_640x200_2490ecf0.jpg'
          }
        ]
      }
    }
  }

</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    width 100%
    height 0
    overflow hidden 
    backkground #eee
    padding-bottom 31.25%
    .swiper-img
      width 100%
</style>
