import { lazy } from 'react'

export const router = [
  {
    path: '/',
    component: lazy(() => import('@/pages/home')),
    children: []
  },
  {
    path: '*',
    component: lazy(() => import('@/pages/not-found')),
    children: []
  }
]
