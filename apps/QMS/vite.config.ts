import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import qiankun from 'vite-plugin-qiankun'

// useDevMode 开启时与热更新插件冲突,使用变量切换
const useDevMode = true

export default defineConfig({
  base: './',
  plugins: [
    ...(useDevMode ? [] : [react()]),
    // 微应用名字，与主应用注册的微应用名字保持一致
    qiankun('oms__qms', {
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
