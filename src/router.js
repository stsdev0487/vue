import Vue from 'vue'
import Router from 'vue-router'
import Detail from './views/Detail.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ 
    {
      path: '/',
      redirect: '/home',
      component: Home
    },  
    {
      path: '/home',
      component: Home
    }, 
    {
      path: '/detail/:id',
      component: Detail
    }
  ]
})
