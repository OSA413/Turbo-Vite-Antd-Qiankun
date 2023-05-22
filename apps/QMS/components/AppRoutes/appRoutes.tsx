import { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AliveScope, KeepAlive } from 'react-activation'

import ErrorBoundary from '@/components/ErrorBoundary'
import { routes } from '@/routes'

const rotuerViews = (routerItems: any[]) => {
  return routerItems && routerItems.length > 0 ? (
    <>
      {routerItems.map(({ path, component: Component, children, redirect }) => {
        const keepAliveKey: string = path
        // const Element: any = (
        //   <KeepAlive name={keepAliveKey} cacheKey={keepAliveKey} id={keepAliveKey}>
        //     <Component />
        //   </KeepAlive>
        // )

        return children && children.length ? (
          <Route path={path} key={path} element={<Component />}>
            {rotuerViews(children)}
            <Route path={path} element={<Navigate to={redirect || children[0].path} />} />
          </Route>
        ) : (
          <Route
            key={path}
            path={path}
            element={
              <KeepAlive name={keepAliveKey} cacheKey={keepAliveKey} id={keepAliveKey}>
                <Component />
              </KeepAlive>
            }
          />
        )
      })}
    </>
  ) : null
}

const AppRoutes = () => {
  return (
    <AliveScope>
      <Suspense>
        <ErrorBoundary>
          <Routes>{rotuerViews(routes)}</Routes>
        </ErrorBoundary>
      </Suspense>
    </AliveScope>
  )
}

export default AppRoutes
