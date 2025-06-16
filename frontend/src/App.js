import React from "react";
import { Routes, Route } from "react-router-dom";
import AddReservation from "./pages/AddReservation";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import NotFound from "./errors/NotFound";
import NavBar from "./utils/NavBar";

import "./App.css";
import "./theme.css";
import "./main.css";

function App() {
  return (
    <div className="theme-bg theme-text">
      <nav>
        <NavBar />
      </nav>
      <div className="theme-main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-reservation" element={<AddReservation />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
