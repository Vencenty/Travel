<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
    <div class="header-right">
      {{city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
    </router-link>    
  </div>
</template>

<script>
  export default {
    name: "HomeHeader",
    props: {
      city: {
        type: String
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~static/varibles.styl';
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #ffffff
    .back-icon
      width .64rem
      float left 
      text-align center
      font-size .4rem
    .header-input
      padding-left .2rem
      flex 1
      height .64rem
      background #fff
      border-radius .1rem
      margin-top .12rem
      margin-left .12rem
      color #ccc
      line-height .64rem
    .header-right
      width 1.24rem
      float right 
      text-align center
      color #fff
      .arrow-icon
        margin-left -.04rem
        font-size .24rem
</style>