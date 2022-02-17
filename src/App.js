import React from "react";
import "./index.css";
import Intro from "./intro.js";
import Layout from "./pages/layout.js";
import Landpage from "./pages/landpage.js";
import LoginPages from "./pages/LoginPages/index.js";
import StorePages from "./pages/Store/index.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/welcome" element={<Intro />} />
        {/* <Route path='/welcome' element={<Intro/>} /> */}
        {/* <Route path='/' element={<Layout/>}> */}
        <Route path="/" element={<Intro />} />
        <Route path="/test" element={<Layout />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/store" element={<StorePages />} />
        <Route path="/home" element={<Landpage />} />
      </Routes>
    </div>
  );
}

export default App;
