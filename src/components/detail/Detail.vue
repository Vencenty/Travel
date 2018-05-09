<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :galleryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './Banner'
import DetailHeader from './Header'
import DetailList from './List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  mounted () {
    axios.get('/api/detail.json', {
      params: {
        id: this.$route.id
      }
    })
    .then((response) => {
      response = response.data
      if(response.errno === true) {
        const data = response.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    })
  }

}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>

