<template>
  <ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in results">
  <router-link :to="{ name: 'setcontent', params: { id: item.set_num }}">{{item.name}}</router-link></li>
</ul>
</template>
<script>
export default {
  name: 'sets',
  data () {
    return {
      apiData: [],
      results: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('lego/sets', { 'page': 1, 'page_size': 20 }, r => {
        this.apiData = r
        this.results = this.apiData.results
      })
    },
    loadMore () {
      this.loading = true
      setTimeout(() => {
        let last = this.list[this.list.length - 1]
        for (let i = 1; i <= 20; i++) {
          this.list.push(last + i)
        }
        this.loading = false
      }, 2500)
    }
  }
}
</script>

