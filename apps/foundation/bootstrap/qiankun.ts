import { registerMicroApps } from 'qiankun'

export const bootstrap = async () => {
  const isProd: boolean = import.meta.env.PROD

  await registerMicroApps([
    {
      name: 'oms__qms', // 必须与微应用注册名字相同
      entry: isProd ? '/oms/qms/' : 'http://localhost:3003', // 入口路径，开发时为微应用所启本地服务，上线时为微应用线上路径
      container: '#oms__qms', // 微应用挂载的节点
      activeRule: '/MES/QMS', // 当访问路由为 /MES/QMS/ 时加载微应用
      props: {
        namespace: 'qms' // 主应用向微应用传递参数
      }
    },
    {
      name: 'oms__vmi',
      entry: isProd ? '/oms/vmi/' : 'http://localhost:3002',
      container: '#oms__vmi',
      activeRule: '/MES/VMI',
      props: {
        namespace: 'vmi'
      }
    }
  ])
}
