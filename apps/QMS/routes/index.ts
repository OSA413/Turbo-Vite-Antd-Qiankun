import { lazy } from 'react'

export const router = [
  {
    path: '/',
    component: lazy(() => import('@/pages/home')),
    children: []
  },
  {
    path: '/login',
    component: lazy(() => import('@/pages/login')),
    children: []
  },
  {
    path: '*',
    component: lazy(() => import('@/pages/not-found')),
    children: []
  }
]
