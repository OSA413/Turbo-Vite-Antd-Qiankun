import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { OConfigProvider, IGlobalStyled, OButton } from '@ocloud/ui'

import AppShell from '@/components/AppShell'
import { createContainer } from './container'
import { createAppCache } from './cache'

const App = () => {
  const devModule: boolean = import.meta.env.REACT_DEV_MODULE
  const container = createContainer(devModule)
  const cache = createAppCache(devModule, container)

  const handleClick = () => {
    console.log(3333)
  }

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={{}}>
        <StyleProvider container={container} transformers={[legacyLogicalPropertiesTransformer]}>
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
