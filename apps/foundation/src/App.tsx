import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import viteLogo from "/vite.svg";
import { router } from "./router";

const App = () => {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <BrowserRouter>
        <Suspense>
          <Routes>
            {router.map(({ path, component: Component }) => {
              return <Route key={path} path={path} element={<Component />} />;
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
      <div id="react-app" />
    </div>
  );
};

export default App;
