import { registerMicroApps, start } from 'qiankun'

export const bootstrap = async () => {
  await registerMicroApps([
    {
      name: 'react-app', // 必须与微应用注册名字相同
      entry: 'http://localhost:3003', // 入口路径，开发时为微应用所启本地服务，上线时为微应用线上路径
      container: '#react-app', // 微应用挂载的节点
      activeRule: '/', // 当访问路由为 /micro-react 时加载微应用
      props: {
        msg: '我是来自主应用的值-react' // 主应用向微应用传递参数
      }
    }
  ])

  await start({
    singular: true,
    sandbox: {
      strictStyleIsolation: true,
      experimentalStyleIsolation: true
    }
  })
}
