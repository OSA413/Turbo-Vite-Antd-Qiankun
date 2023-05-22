import { BrowserRouter } from 'react-router-dom'
import { StyleProvider, legacyLogicalPropertiesTransformer, createCache } from '@ant-design/cssinjs'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import { OConfigProvider, OApp, IGlobalStyled } from '@ocloud/ui'

import { createAppCache, createContainer } from '@ocloud/utils'

import { antdTheme } from '@/config/antd'
import AppShell from '@/components/AppShell'
import AppRoutes from '@/components/AppRoutes'

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
          <OConfigProvider prefixCls="qms" theme={antdTheme} getPopupContainer={getPopupContainer}>
            <OApp>
              <BrowserRouter basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? '/MES/QMS' : '/'}>
                <AppShell>
                  <AppRoutes />
                </AppShell>
              </BrowserRouter>
            </OApp>
          </OConfigProvider>
        </StyleProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
