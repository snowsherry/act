import Vue from 'vue'
import Router from 'vue-router'
import taskcenter from '../views/taskcenter/index'
import routeTaskCenter from './taskCenter'
import routeNew from './new'
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
    ...routeTaskCenter,
      ...routeNew,
    {
      path: '*',
      redirect:"/"
    },
  ]
})
