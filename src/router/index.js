import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'PostIndex',
      component: () => import('../views/posts/PostIndex.vue')
    },
    {
      path: '/posts/create',
      name: 'PostCreate',
      component: () => import('../views/posts/PostCreate.vue')
    },
    {
      path: '/posts/:id/edit',
      name: 'PostEdit',
      component: () => import('../views/posts/PostEdit.vue'),
    },
    {
      path: '/books',
      name: 'BookIndex',
      component: () => import('../views/books/BookIndex.vue')
    },
  ]
})

export default router
