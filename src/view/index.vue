<template>
  <div id="index">
    <a class="section" v-for="item in items" :href="item.url">
      <p class="section-img"><img :src="item.img" alt=""></p>
      <p class="section-title">{{item.name}}</p>
    </a>    
  </div>
  </template>
<script>
export default {
  name: 'index',
  data () {
    return {
      items: [
        { 'img': '/static/img/logo.png', 'name': 'Sets', 'url': '/sets' },
        { 'img': '/static/img/logo.png', 'name': 'Themes', 'url': '' },
        { 'img': '/static/img/logo.png', 'name': 'search', 'url': '/search' },
        { 'img': '/static/img/logo.png', 'name': 'Mocs', 'url': '' },
        { 'img': '/static/img/logo.png', 'name': 'User', 'url': '' }
      ]
    }
  }
}
</script>
<style>
#index{
  width: 100%;
  margin-top: 5%;
}
.section{
  min-height: 80px;
  float: left;
  width: 25%;
  display: block;
  text-align: center;
}
.section-img{
    position: relative;
    display: inline-block;
    width: 50%;
    height: 50%;
}
.section-img img{
    width: 100%;
    height: 100%; 
}
</style>


