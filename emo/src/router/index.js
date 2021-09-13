import Vue from 'vue'
import VueRouter from 'vue-router'
import Mine from '../views/mine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Mine',
    component: Mine
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
