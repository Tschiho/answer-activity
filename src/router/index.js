import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
// import Item from '@/components/item'
// import Score from '@/components/score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "index",
      component: Index
    },{
    	path: '/item',
    	name: 'item',
    	component: () => import('@/components/item')
    },{
    	path: '/score',
    	name: 'score',
    	component: () => import('@/components/score')
    }
  ]
})
