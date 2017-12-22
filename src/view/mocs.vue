<template>

  <div id='mocs'>
    <mt-header title="mocs">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>     
    </mt-header>
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
    <a class="mocs-li" v-for="item in results" :href="'/moccontent/' + item.set_num + '/' + item.name">
      <span class="mocs-img"><img :src="item.set_img_url" width="100%" alt=""></span>
      <span class="mocs-title">
        <p>{{item.name}}</p>
        <p style="margin-top:10%">{{item.year}}年</p>
      </span>
    </a>    
    </mt-loadmore>
  </div>
</template>
<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'mocs',
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
      this.$api.get('lego/mocs', { 'page': 1, 'page_size': 20, 'ordering': '-year' }, r => {
        Indicator.close()
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
<style>
.mocs-li{
  width:100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  min-height: 100px;
}
.mocs-img{
  width: 30%;
  vertical-align: middle;
  padding: 2%
}
.mocs-title{
  width: 70%;
  padding-top: 5%;
  padding-left: 5%;
}
</style>

