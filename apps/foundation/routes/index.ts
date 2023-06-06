import { LazyExoticComponent, lazy } from 'react'

interface Routes {
  path: string
  redirect?: string
  component: LazyExoticComponent<any>
  children: Routes[]
}

export const routes: Routes[] = [
  {
    path: '/',
    component: lazy(() => import('@/components/HomePage')),
    children: [
      {
        path: '/',
        component: lazy(() => import('@/pages/home')),
        children: []
      },
      {
        path: '/MES/VMI/*',
        component: lazy(() => import('@/pages/mes/vmi')),
        children: []
      },
      {
        path: '/MES/QMS/*',
        component: lazy(() => import('@/pages/mes/qms')),
        children: []
      }
    ]
  },
  {
    path: '*',
    component: lazy(() => import('@/pages/not-found')),
    children: []
  }
]
