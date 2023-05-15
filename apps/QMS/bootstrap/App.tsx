import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { OConfigProvider, IGlobalStyled, OButton } from '@ocloud/ui'
// import createCache from '@emotion/cache'

import AppShell from '@/components/AppShell'

// const qiankunShadowDom: any = document.querySelector('div[data-name="react-app"]')?.shadowRoot
// const targetContainer: any = qiankunShadowDom.querySelector('qiankun-head')

// const cache = createCache({
//   key: 'css',
//   container: targetContainer,
//   prepend: false,
//   speedy: false,
//   stylisPlugins: []
// })

const App = () => {
  const handleClick = () => {
    console.log(222)
  }

  return (
    // <CacheProvider value={cache}>
    <ThemeProvider theme={{}}>
      <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
        <OConfigProvider>
          <IGlobalStyled />
          <AppShell>
            <p>Micro Sub App</p>
            <OButton type="primary" onClick={handleClick}>
              Add
            </OButton>
          </AppShell>
        </OConfigProvider>
      </StyleProvider>
    </ThemeProvider>
    // </CacheProvider>
  )
}

export default App
