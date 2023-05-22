// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { render as appRender } from 'react-dom'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

import App from './App'

const render = (container?: string) => {
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
  const appDom: any = container ? container : document.getElementById('qms')
  // createRoot(appDom).render(
  //   <StrictMode>
  //     <App />
  //   </StrictMode>
  // )
  appRender(<App />, appDom)
}

const initQianKun = () => {
  renderWithQiankun({
    // 文档 https://qiankun.umijs.org/zh/guide/getting-started#
    mount(props: any) {
      console.log(props)
      render(props.container)
      //  可以通过props读取主应用的参数：msg
      // 监听主应用传值
      props.onGlobalStateChange((res: any) => {
        console.log(res.count)
      })
    },
    bootstrap() {},
    update() {},
    unmount() {}
  })
}

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
