import React from "react";
import "./index.css";
import Intro from "./intro.js";
import Layout from "./pages/layout.js";
import Landpage from "./pages/landpage.js";
import LoginPages from "./pages/LoginPages/index.js";
import HowTo from "./pages/HowTopages/howto.js";
import FAQ from "./pages/FAQ/faq.js";
import About from "./pages/aboutpages/about.js";
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
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
