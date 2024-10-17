import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { APP_URL } from "./config/url";
import { Discover, Home, Login, Manifesto, Signup, Upgrade } from "./pages";

function App() {
  return (
    <Routes>
      <Route path={APP_URL.HOME} element={<Home />} />
      <Route path={APP_URL.LOGIN} element={<Login />} />
      <Route path={APP_URL.SIGNUP} element={<Signup />} />
      <Route path={APP_URL.DISCOVER} element={<Discover />} />
      <Route path={APP_URL.MANIFESTO} element={<Manifesto />} />
      <Route path={APP_URL.UPGRADE} element={<Upgrade />} />
    </Routes>
  );
}

export default App;
