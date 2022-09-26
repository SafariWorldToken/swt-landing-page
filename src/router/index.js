import { createRouter, createWebHistory } from 'vue-router'

import SafariWorld from '../views/SafariWorld.vue'
//import Vaults from '../views/Vaults.vue'
//import WildNFTs from '../views/WildNFTs.vue'
//import Litepaper from '../views/Litepaper.vue'
import NotFoundComponent from '../components/NotFoundComponent.vue'

const routes = [

  {
    path: '/',
    name: 'SafariWorld',
    component: SafariWorld
  },
  {
    path: '/Vaults',
    name: 'Vaults',
    component: () => import('../views/Vaults.vue'),
  },
  {
    path: '/WildNFTs',
    name: 'WildNFTs',
    component: () => import('../views/WildNFTs.vue'),
  },
  {
    path: '/Litepaper',
    name: 'LitePaper',
    component: () => import('../views/Litepaper.vue'),
  },
  { path: '/:pathMatch(.*)', 
    component: NotFoundComponent 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
