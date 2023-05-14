import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { ThemeProvider } from '@emotion/react'
import { OConfigProvider, OButton } from '@ocloud/ui'

import { router } from './router'

const App = () => {
  const handleClick = () => {
    console.log(111)
  }

  return (
    <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
      <ThemeProvider theme={{}}>
        <OConfigProvider>
          <div className="App">
            <BrowserRouter>
              <Suspense>
                <Routes>
                  {router.map(({ path, component: Component }) => {
                    return <Route key={path} path={path} element={<Component />} />
                  })}
                </Routes>
              </Suspense>
            </BrowserRouter>
            <OButton type="dashed" onClick={handleClick}>
              OButton
            </OButton>
            <div id="react-app" />
          </div>
        </OConfigProvider>
      </ThemeProvider>
    </StyleProvider>
  )
}

export default App
