import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
