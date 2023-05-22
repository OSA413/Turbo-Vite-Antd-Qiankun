import { useEffect } from 'react'
import { start } from 'qiankun'

const QMS = () => {
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

    return () => {
      window.qiankunStarted = false
    }
  }, [])

  return (
    <div>
      <div id="oms__qms" />
    </div>
  )
}

export default QMS
