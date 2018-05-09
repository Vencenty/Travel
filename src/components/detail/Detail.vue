<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
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
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '三馆联票',
              children: [
                {
                  title: '操操操',
                  children: [
                    {title: '你是不是煞笔'}
                  ]
                }
              ]
            }
          ]
        },
        {
          title: '儿童票'
        },
        {
          title: '学生票'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>

