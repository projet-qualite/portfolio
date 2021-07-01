import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projets from '../components/Projets.vue'
import About from '../components/About.vue'
import Competences from '../components/Competences.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projets',
    name: 'Projets',
    component: Projets
  },
  
  {
    path: '/apropos',
    name: 'About',
    component: About
  },
  {
    path: '/competences',
    name: 'Competences',
    component: Competences
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router


