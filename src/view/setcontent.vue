<template>
<div>
  <mt-header fixed :title="this.$route.params.id + '-' + this.$route.params.name" style="overflow:inherit">
        <router-link to="/sets" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>     
  </mt-header>
  <div id='parts'>    
    <div class="parts-li" v-for="item in results" >
      <span class="parts-img"><img :src="item.part.part_img_url" width="100%" alt=""></span>
      <span class="parts-title">
        <p>{{item.part.name}}</p>
        <p>数量：{{item.quantity}}</p> 
      </span>
    </div>    
  </div> 
</div>
</template>
<script>
export default {
  name: 'setcontent',
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
      this.$api.get('lego/sets/' + this.$route.params.id + '/parts', null, r => {
        this.apiData = r
        this.results = r.results
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
#parts{
  margin-top: 40px;
  width:100%;
}
.parts-li{
  
  width:100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  min-height: 100px;
}
.parts-img{
  width: 30%;
  vertical-align: middle;
  padding: 2%
}
.parts-title{
  width: 70%;
  padding-top: 5%;
  padding-left: 5%;
}
</style>