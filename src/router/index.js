import Vue from 'vue'
import Router from 'vue-router'
import Sets from '@/view/sets'
import Index from '@/view/index'
import SetContent from '@/view/setcontent'
import Search from '@/view/search'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/sets',
      name: 'sets',
      component: Sets
    },
    {
      path: '/setcontent/:id/:name',
      name: 'setcontent',
      component: SetContent
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
