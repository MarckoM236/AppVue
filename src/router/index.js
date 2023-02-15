import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


import ComponentCrear from '../components/ComponentCrear.vue'
import ComponentEditar from '../components/ComponentEditar.vue'
import ComponentListar from '../components/ComponentListar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  //Nuevas Rutas
  {
    path: '/crear',
    name: 'Crear',
    component: ComponentCrear
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: ComponentEditar
  },
  {
    path: '/listar',
    name: 'Listar',
    component: ComponentListar
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
