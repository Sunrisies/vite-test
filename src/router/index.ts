import { createRouter,createWebHistory } from 'vue-router'

// 静态路由
export const routes = [
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue')
  },
  {
    path: '/404',
    component: () => import('@/pages/error/404.vue')
  },
  {
    path: '/',
    component: () => import('@/pages/index/index.vue')
  }
]

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
