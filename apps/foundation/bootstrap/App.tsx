import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { ThemeProvider } from '@emotion/react'
import { OConfigProvider, IGlobalStyled } from '@ocloud/ui'

import { router } from '@/router'

const App = () => {
  return (
    <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
      <ThemeProvider theme={{}}>
        <OConfigProvider>
          <IGlobalStyled />
          <BrowserRouter>
            <Suspense>
              <Routes>
                {router.map(({ path, component: Component }) => {
                  return <Route key={path} path={path} element={<Component />} />
                })}
              </Routes>
            </Suspense>
          </BrowserRouter>
        </OConfigProvider>
      </ThemeProvider>
    </StyleProvider>
  )
}

export default App
