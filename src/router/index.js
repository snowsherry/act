import Vue from 'vue'
import Router from 'vue-router'
import taskcenter from '../views/taskcenter/index'
import routeTaskCenter from './taskCenter'
import routeNew from './new'
import routeBet from './bet'
import routeChallenge from './challenge'
import routePop from './pop'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: taskcenter
    },
    {
      path: '/dsbridge',
      name: 'dsbridge',
      component: ()=>import('@/views/dsbridge.vue')
    },
      ...routeTaskCenter,
      ...routeNew,
      ...routeChallenge,
      ...routeBet,
      ...routePop
    /*{
      path: '*',
      redirect:"/"
    },*/
  ]
})
