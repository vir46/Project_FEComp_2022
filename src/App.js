import React from 'react';

import Intro from './intro.js';
import Navigasi from "./component/navigation/nav.js";
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/welcome' element={<Intro/>} />
        <Route path='/' element={<Navigasi/>}>
          {/* <Route index path='/' element={<Intro/>} /> */}
        </Route>
      </Routes>
    </div>
  );
} 

export default App;
