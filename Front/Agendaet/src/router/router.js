import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Agendas from '../views/Agendar.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/agendas',
    name: 'Agendas',
    component: Agendas
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
