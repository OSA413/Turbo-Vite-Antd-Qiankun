import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StyleProvider, legacyLogicalPropertiesTransformer, createCache } from '@ant-design/cssinjs'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import { OConfigProvider, OApp, IGlobalStyled } from '@ocloud/ui'

import { createAppCache, createContainer } from '@ocloud/utils'

import AppShell from '@/components/AppShell'
import { router } from '@/routes'

const App = () => {
  const devModule: boolean = import.meta.env.REACT_DEV_MODULE
  const appName: string = import.meta.env.REACT_APP_NAME
  const container = createContainer(devModule, appName)
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
              <BrowserRouter basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? '/MES/VMI' : '/'}>
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
