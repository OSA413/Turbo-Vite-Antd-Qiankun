import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { ThemeProvider } from '@emotion/react'
import { OConfigProvider, IGlobalStyled, OButton } from '@ocloud/ui'

import AppShell from '@/components/AppShell'

const App = () => {
  const handleClick = () => {
    console.log(222)
  }

  return (
    <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
      <ThemeProvider theme={{}}>
        <OConfigProvider>
          <IGlobalStyled />
          <AppShell>
            <p>Micro Sub App</p>
            <OButton type="primary" onClick={handleClick}>
              Add
            </OButton>
          </AppShell>
        </OConfigProvider>
      </ThemeProvider>
    </StyleProvider>
  )
}

export default App
