import { BrowserRouter } from 'react-router-dom'
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { ThemeProvider } from '@emotion/react'
import { OConfigProvider, IGlobalStyled } from '@ocloud/ui'

import AppRoutes from '@/components/AppRoutes'

const App = () => {
  return (
    <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
      <ThemeProvider theme={{}}>
        <OConfigProvider>
          <IGlobalStyled />
          <BrowserRouter>
            <AppRoutes />
            <div id="oms__vmi" />
            <div id="oms__qms" />
          </BrowserRouter>
        </OConfigProvider>
      </ThemeProvider>
    </StyleProvider>
  )
}

export default App
