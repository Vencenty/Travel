<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div
          class="icon"
          v-for="item in page"
          :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.iconUrl">
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>

      <!-- <swiper-slide>
        <div class="icon">
          <div class="icon-img">
            <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png" alt="">
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
      </swiper-slide> -->
    </swiper>

  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      icons: [
        {
          id: "001",
          desc: "景点门票",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: "002",
          desc: "必游榜单",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png"
        },
        {
          id: "003",
          desc: "踏花赏春",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png"
        },
        {
          id: "004",
          desc: "一日游",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png"
        },
        {
          id: "005",
          desc: "动植物园",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/ee/5114069893722102.png"
        },
        {
          id: "006",
          desc: "故宫",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png"
        },
        {
          id: "007",
          desc: "古北水镇",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png"
        },
        {
          id: "008",
          desc: "Q+精选",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png"
        },
        {
          id: "009",
          desc: "热门景点",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png"
        }
      ]
    };
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
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
