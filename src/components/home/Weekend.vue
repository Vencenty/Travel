<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>  
    <ul>
      <li 
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
        >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    data () {
      return {
        recommendList: [
          {
            id: '1001',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
            title: '学生最爱的博物馆',
            desc:'周末干嘛？北京很多博物馆已经免费开放啦'
          },
          {
            id: '1002',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
            title: '寻找北京的皇城范儿',
            desc:'数百年的宫廷庙宇，至今依旧威严霸气'
          },
          {
            id: '1003',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg',
            title: '儿童剧场，孩子的乐园',
            desc:'带宝贝观看演出，近距离体验艺术的无穷魅力'
          }
        ]
      } 
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~static/mixins.styl'
  .recommend-title
    maring-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden 
    height 0
    padding-bottom 33.9%
  .item 
    padding .1rem
    .item-img
      width 100%
    .item-title
      line-height .54rem
      font-size .28rem
      color #212121
      ellipsis()
    .item-desc
      ellipsis()
      line-height .4rem
      color #616161
</style>

