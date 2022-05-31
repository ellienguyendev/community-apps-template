import React, { useState, useRef } from 'react'
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import Geocode from "react-geocode";

// We import all the components we need in our app
import Button from './components/button'
import Create from "./components/create";
import Edit from "./components/edit";

import Navbar from "./components/navbar";
import RecordList from "./components/recordList";



const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
        <Routes>
          <Route exact path="/" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
