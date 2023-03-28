import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

import App from "./App";

const initQianKun = () => {
  renderWithQiankun({
    // 当前应用在主应用中的生命周期
    // 文档 https://qiankun.umijs.org/zh/guide/getting-started#
    mount(props) {
      console.log(props);
      render(props.container);
      //  可以通过props读取主应用的参数：msg
      // 监听主应用传值
      props.onGlobalStateChange((res: any) => {
        console.log(res.count);
      });
    },
    bootstrap() {},
    update() {},
    unmount() {},
  });
};

const render = (container?: string) => {
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
  const appDom: any = container ? container : document.getElementById("root");
  createRoot(appDom).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render();
