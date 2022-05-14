import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Hottest from "./pages/Hottest.js";
import AddMems from "./pages/AddMems.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hottest" element={<Hottest />} />
        <Route path="addMemes" element={<AddMems />} />
      </Routes>
    </div>
  );
}
