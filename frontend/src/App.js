import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./errors/NotFound";


import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <Routes >
      <Route path="/" element={<Home />}/> 
      <Route path="*" element={<NotFound />} />
   </Routes>

  );
}

export default App;
