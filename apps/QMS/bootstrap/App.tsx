import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { ThemeProvider } from '@emotion/react'
import { OConfigProvider, OButton } from '@ocloud/ui'

import AppShell from '@/components/AppShell'

const App = () => {
  return (
    <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
      <ThemeProvider theme={{}}>
        <OConfigProvider>
          <AppShell>
            <p>Micro Sub App</p>
            <OButton type="primary">Add</OButton>
          </AppShell>
        </OConfigProvider>
      </ThemeProvider>
    </StyleProvider>
  )
}

export default App
