import React from "react";
import "./index.css";
import Intro from "./intro.js";
import Layout from "./pages/layout.js";
import Landpage from "./pages/landpage.js";
import LoginPages from "./pages/LoginPages/index.js";
import StorePages from "./component/drawer/index.js";
import HowTo from "./pages/HowTopages/howto.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Landpage />} />
          <Route path="/login" element={<LoginPages />} />
          <Route path="/howto" element={<HowTo />} />
        </Route>
        <Route path="/user" element={<Layout/>}>
          <Route path="/user" element={<StorePages />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
