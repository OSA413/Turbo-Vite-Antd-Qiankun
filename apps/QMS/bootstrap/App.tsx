import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { OConfigProvider, OApp, IGlobalStyled } from '@ocloud/ui'

import AppShell from '@/components/AppShell'
import { createContainer } from './container'
import { createAppCache } from './cache'

const App = () => {
  const devModule: boolean = import.meta.env.REACT_DEV_MODULE
  const container = createContainer(devModule)
  const cache = createAppCache(devModule, container)

  const getPopupContainer = () => {
    return devModule ? container : document.body
  }

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={{}}>
        <StyleProvider container={container} transformers={[legacyLogicalPropertiesTransformer]}>
          <IGlobalStyled />
          <OConfigProvider getPopupContainer={getPopupContainer}>
            <OApp>
              <AppShell>
                <p>Qiankun Sub React App</p>
              </AppShell>
            </OApp>
          </OConfigProvider>
        </StyleProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
