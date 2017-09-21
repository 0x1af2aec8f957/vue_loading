import Vue from 'vue'
import Router from 'vue-router'
import vueSpin from '@/components/vueSpin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vueSpin',
      component: vueSpin
    }
  ]
})
