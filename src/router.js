import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Start from './components/Start.vue'
import Setup from './components/Setup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/start-project',
      name: 'start',
      component: Start
    },
    {
      path: '/setup',
      name: 'setup',
      component: Setup
    }
  ]
})
