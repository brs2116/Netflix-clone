import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login"
import Player from "./Pages/Player/Player";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/play/:id" element={<Player/>}/>

      </Routes>
    </div>
  );
}

export default App;
