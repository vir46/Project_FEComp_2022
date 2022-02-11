import React from 'react';
import Intro from './intro.js';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Intro /> */}
      {/* <Route exact path="/" component={Intro} /> */}
      <Routes>
        <Route path='/' element={<Intro/>} />
      </Routes>
    </div>
  );
} 

export default App;
