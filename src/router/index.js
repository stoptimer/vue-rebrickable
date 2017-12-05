import Vue from 'vue'
import Router from 'vue-router'
import Sets from '@/view/sets'
import SetContent from '@/view/setcontent'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/sets',
      name: 'sets',
      component: Sets
    },
    {
      path: '/setcontent/:id',
      name: 'setcontent',
      component: SetContent
    }
  ]
})
