import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { Plugin as importCDN, autoComplete } from 'vite-plugin-cdn-import'

export default ({ mode }: ConfigEnv) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd(), 'REACT_')
  }

  return defineConfig({
    base: '/',
    plugins: [
      react(),
      importCDN({
        modules: [autoComplete('react'), autoComplete('react-dom')],
        prodUrl: 'https://cdn.bootcdn.net/ajax/libs/{name}/{version}/{path}'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './')
      }
    },
    server: {
      port: 3000
    }
  })
}
