<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div
          class="icon"
          v-for="item in page"
          :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const number = Math.floor(index / 8)
        if(!pages[number]) {
          pages[number] = []
        }
        pages[number].push(item)
      })
      return pages
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '~static/varibles.styl'
  @import '~static/mixins.styl'

  .icons >>> .swiper-container
    height: 0;
    padding-bottom: 50%;
    margin-bottom .2rem
  .icons
    margin-top .1rem
    .icon 
      height: 0;
      position: relative;
      overflow: hidden;
      float: left;
      width: 25%;
      padding-bottom: 25%;

      .icon-img 
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0.44rem;
        box-sizing: border-box;
        padding: 0.1rem;
        .icon-img-content 
          display: block;
          margin: 0 auto;
          height: 100%;
      .icon-desc 
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: 0.44rem;
        height: 0.44rem;
        text-align: center;
        color: $textColor;
        ellipsis()
</style>
