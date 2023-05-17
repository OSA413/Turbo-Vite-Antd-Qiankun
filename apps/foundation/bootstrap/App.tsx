import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { ThemeProvider } from '@emotion/react'
import { OConfigProvider, IGlobalStyled } from '@ocloud/ui'

import AppShell from '@/components/AppShell'
import { router } from '@/routes'

const App = () => {
  return (
    <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
      <ThemeProvider theme={{}}>
        <OConfigProvider>
          <IGlobalStyled />
          <BrowserRouter>
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
        </OConfigProvider>
      </ThemeProvider>
    </StyleProvider>
  )
}

export default App
