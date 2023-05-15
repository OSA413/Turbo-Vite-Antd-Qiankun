import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { OConfigProvider, IGlobalStyled, OButton } from '@ocloud/ui'

import AppShell from '@/components/AppShell'
import { createAppCache } from './cache'

const App = () => {
  const devModule: boolean = import.meta.env.REACT_DEV_MODULE
  const cache = createAppCache(devModule)

  const qiankunShadowDom: any = document.querySelector('div[data-name="react-app"]')?.shadowRoot
  const targetContainer: any = qiankunShadowDom.querySelector('qiankun-head')

  const handleClick = () => {
    console.log(222)
  }

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={{}}>
        <StyleProvider
          container={targetContainer}
          transformers={[legacyLogicalPropertiesTransformer]}>
          <OConfigProvider>
            <IGlobalStyled />
            <AppShell>
              <p>Qiankun Sub React App</p>
              <OButton type="primary" onClick={handleClick}>
                Add
              </OButton>
            </AppShell>
          </OConfigProvider>
        </StyleProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
