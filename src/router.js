import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Start from './components/Start.vue'
import Setup from './components/Setup.vue'
import AxiosSetup from './components/AxiosSetup.vue'
import FinishHome from './components/FinishHome.vue'
import CreateTaco from './components/CreateTaco.vue'
import Done from './components/Done.vue'

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
    },
    {
      path: '/axios-setup',
      name: 'axiosSetup',
      component: AxiosSetup
    },
    {
      path: '/finish-home',
      name: 'finishHome',
      component: FinishHome
    },
    {
      path: '/create-taco',
      name: 'createTaco',
      component: CreateTaco
    },
    {
      path: '/done',
      name: 'done',
      component: Done
    }
  ]
})
