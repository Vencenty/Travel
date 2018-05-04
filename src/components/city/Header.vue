<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  }
</script>

<style lang="stylus" scoped>
  @import '~static/varibles.styl'
  .header
    height $headerHeight
    line-height $headerHeight
    overflow hidden 
    text-align center 
    color #fff
    background $bgColor
    font-size .32rem
    position relative 
    .header-back
      width .64rem
      font-size .4rem
      text-align center 
      position absolute
      top 0
      left 0
      color #fff
</style>
