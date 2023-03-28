import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react(),
    qiankun("react-app", {
      // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true,
    }),
  ],
  server: {
    port: 3003,
  },
});
