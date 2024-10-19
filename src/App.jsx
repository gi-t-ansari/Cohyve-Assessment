import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { APP_URL } from "./config/url";
import { Discover, Home, Login, Manifesto, Signup, Upgrade } from "./pages";
import requireAuth from "./common/components/hoc/requiredAuth";
import requireNoAuth from "./common/components/hoc/requiredNoAuth";
import Comet from "./pages/comet/Comet";

function App() {
  return (
    <Routes>
      <Route path={APP_URL.LOGIN} element={requireNoAuth(Login)} />
      <Route path={APP_URL.SIGNUP} element={requireNoAuth(Signup)} />
      <Route path={APP_URL.DISCOVER} element={requireNoAuth(Discover)} />
      <Route path={APP_URL.MANIFESTO} element={requireNoAuth(Manifesto)} />
      <Route path={APP_URL.COMET} element={requireNoAuth(Comet)} />

      <Route path={APP_URL.HOME} element={requireAuth(Home)} />
      <Route path={APP_URL.UPGRADE} element={requireAuth(Upgrade)} />
    </Routes>
  );
}

export default App;
