import Router from 'vue-router'
import HomePlatzi from '@/views/HomePlatzi'
import AboutPlatzi from '@/views/AboutPlatzi'
import ErrorPlatzi from '@/views/ErrorPlatzi'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePlatzi,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPlatzi,
    },
    {
      path: '*',
      name: 'error',
      component: ErrorPlatzi,
    },
  ],
})
