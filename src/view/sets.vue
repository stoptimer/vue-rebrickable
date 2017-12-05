<template>
  <div id='sets'>
    <mt-header title="Sets">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>     
    </mt-header>
    <a class="sets-li" v-for="item in results" :href="'/setcontent/' + item.set_num + '/' + item.name">
      <span class="sets-img"><img :src="item.set_img_url" width="100%" alt=""></span>
      <span class="sets-title">
        <p>{{item.name}}</p>
        <p style="margin-top:10%">{{item.year}}年</p>
      </span>
    </a>    
  </div>
</template>
<script>
import { Indicator } from 'mint-ui'
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
      this.$api.get('lego/sets', { 'page': 1, 'page_size': 20, 'ordering': '-year' }, r => {
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
.sets-li{
  width:100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  min-height: 100px;
}
.sets-img{
  width: 30%;
  vertical-align: middle;
  padding: 2%
}
.sets-title{
  width: 70%;
  padding-top: 5%;
  padding-left: 5%;
}
</style>

