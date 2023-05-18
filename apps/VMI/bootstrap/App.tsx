import { Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StyleProvider, legacyLogicalPropertiesTransformer, createCache } from '@ant-design/cssinjs'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { OConfigProvider, OApp, IGlobalStyled } from '@ocloud/ui'

import AppShell from '@/components/AppShell'
import { router } from '@/routes'

import { createContainer } from './container'
import { createAppCache } from './cache'

const App = () => {
  const devModule: boolean = import.meta.env.REACT_DEV_MODULE
  const container = createContainer(devModule)
  const cache = createAppCache(devModule, container)
  const sslCache = createCache()

  const getPopupContainer = () => {
    return devModule ? container : document.body
  }

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={{}}>
        <StyleProvider
          cache={sslCache}
          container={container}
          transformers={[legacyLogicalPropertiesTransformer]}>
          <IGlobalStyled />
          <OConfigProvider prefixCls="vmi" getPopupContainer={getPopupContainer}>
            <OApp>
              <BrowserRouter basename="/MES/VMI">
                <Suspense>
                  <AppShell>
                    <Routes>
                      {router.map(({ path, component: Component }) => {
                        return <Route key={path} path={path} element={<Component />} />
                      })}
                    </Routes>
                  </AppShell>
                </Suspense>
              </BrowserRouter>
            </OApp>
          </OConfigProvider>
        </StyleProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
