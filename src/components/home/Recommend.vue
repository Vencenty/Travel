<template>
  <div>
    <div class="recommend-title">热销推荐</div>  
    <ul>
      <li 
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
        >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    data () {
      return {
        recommendList: [
          {
            id: '1001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
            title: '北京野生动物园',
            desc:'这里是北京动物园,这里是北京动物园,这里是北京动物园,'
          },
          {
            id: '1002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg',
            title: '古北水镇',
            desc:'呵呵呵呵额呵呵'
          },
          {
            id: '1003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
            title: '欢乐谷',
            desc:'欢乐谷欢乐多好吧'
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
  .item
    display flex
    overflow hidden 
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      min-width 0
      flex 1
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        ellipsis()
        line-height .4rem
        color #ccc
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>

