import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index'

import prd from '@/pages/prd'

import inquiry from '@/pages/inquiry/inquiry'

import my from '@/pages/my/my'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/prd',
      name: 'prd',
      component: prd
    },
    {
      path: '/inquiry',
      name: 'inquiry',
      component: inquiry
    },
  ]
})
