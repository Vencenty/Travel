<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>  
    <ul>
      <li 
        class="item border-bottom"
        v-for="item in list"
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
    props: {
      list: Array
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
    padding-bottom 37%
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

