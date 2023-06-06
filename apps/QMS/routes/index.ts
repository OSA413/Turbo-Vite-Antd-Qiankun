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
    redirect: '',
    component: lazy(() => import('@/pages/home')),
    children: [
      {
        path: '/setting/qualityPlan',
        component: lazy(() => import('@/pages/setting/qualityPlan')),
        children: []
      },
      {
        path: '/setting/checktools',
        component: lazy(() => import('@/pages/setting/checktools')),
        children: []
      },
      {
        path: '/setting/SampleProgramme',
        component: lazy(() => import('@/pages/setting/SampleProgramme')),
        children: []
      },
      {
        path: '/OQC/returnRegoods',
        component: lazy(() => import('@/pages/OQC/returnRegoods')),
        children: []
      },
      {
        path: '*',
        component: lazy(() => import('@/pages/not-found')),
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
