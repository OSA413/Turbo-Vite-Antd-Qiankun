import { useEffect } from 'react'
import { start } from 'qiankun'

const Home = () => {
  useEffect(() => {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      start({
        singular: true,
        sandbox: {
          strictStyleIsolation: true,
          experimentalStyleIsolation: true
        }
      })
    }
  }, [])

  return (
    <div>
      <h1>Qiankun Main App</h1>
      <div id="oms__qms"></div>
    </div>
  )
}

export default Home
