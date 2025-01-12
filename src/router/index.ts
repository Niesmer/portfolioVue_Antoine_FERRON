import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/informations/index',
    name: 'informations',
    component: () => import('../pages/informations.vue')
  },
  {
    path: '/project/:id',
    name: 'project',
    component: () => import('../pages/project/[id].vue')
  }
]

export default routes
