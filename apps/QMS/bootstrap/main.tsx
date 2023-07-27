import { render } from 'react-dom'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

import App from './App'

const renderApp = (container?: string, namespace?: string) => {
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
  const appDom: any = container ? container : document.getElementById('qms')
  render(<App namespace={namespace} />, appDom)
}

const initQianKun = () => {
  renderWithQiankun({
    // 文档 https://qiankun.umijs.org/zh/guide/getting-started#
    mount(props: any) {
      console.log('QMS子应用开始挂载......')
      const { container, namespace } = props
      renderApp(container, namespace)
      // 监听主应用传值
      props.onGlobalStateChange((res: any) => {
        console.log(res.count)
      })
    },
    bootstrap() {},
    update() {},
    unmount() {
      console.log('QMS子应用已经卸载......')
      window.aliveController.clear()
      console.log(window.aliveController.getCachingNodes())
    }
  })
}

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : renderApp()
