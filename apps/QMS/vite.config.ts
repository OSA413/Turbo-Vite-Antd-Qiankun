import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import qiankun from 'vite-plugin-qiankun'
import { createHtmlPlugin } from 'vite-plugin-html'

export default ({ mode }: ConfigEnv) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd(), 'REACT_')
  }

  // 微应用名字，与主应用注册的微应用名字保持一致
  const appName: string = process.env.REACT_APP_NAME || ''
  // useDevMode 开启时与热更新插件冲突,使用变量切换
  const useDevMode: boolean = process.env.DEV_MODULE === 'true'

  return defineConfig({
    base: './',
    define: {
      'import.meta.env.REACT_APP_NAME': JSON.stringify(appName),
      'import.meta.env.REACT_DEV_MODULE': JSON.stringify(useDevMode)
    },
    plugins: [
      createHtmlPlugin({
        minify: false,
        entry: path.resolve(__dirname, 'bootstrap/main.tsx'),
        inject: {
          // data: {
          //   cdnPath: process.env.REACT_CDN_PATH,
          //   appPath: process.env.REACT_APP_URL,
          //   apiPath: process.env.REACT_APP_API_URL
          // },
          tags: [
            {
              injectTo: 'body-prepend',
              tag: 'div',
              attrs: {
                id: 'root'
              }
            }
          ]
        }
      }),
      ...(useDevMode ? [] : [react()]),
      qiankun(appName, {
        useDevMode: true
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './')
      }
    },
    server: {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      port: 3003
    }
  })
}
