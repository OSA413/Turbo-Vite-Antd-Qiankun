import { lazy } from 'react'

export const router = [
  {
    path: '/',
    component: lazy(() => import('@/pages/index')),
    children: []
  }
]
