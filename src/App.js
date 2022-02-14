import React from 'react';
import './index.css'
import Intro from './intro.js';
import Layout from './pages/layout.js';
import Landpage from "./pages/landpage.js";
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/welcome' element={<Intro/>} />
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Landpage/>} />
      </Route>
      </Routes>
    </div>
  );
} 

export default App;
