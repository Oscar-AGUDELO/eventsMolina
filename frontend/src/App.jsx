import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "@pages/Start";
import Reserva from "@pages/Reserva";
import Home from "@pages/Home";
import Info from "@pages/Info";
import Reservar from "@pages/Reservar";
import Playlist from "@pages/Playlist";
import AdminLogin from "@pages/AdminLogin";
import AdminPanel from "@pages/AdminPanel";
import "./App.css";

function App() {
  return (
    <div className="App" id="App">
      <div className="sectionfond" />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/INICIO" element={<Home />} />
        <Route path="/PLAYLIST" element={<Playlist />} />
        <Route path="/RESERVAR" element={<Reservar />} />
        <Route path="/CONTACTO" element={<Info />} />
        <Route path="/RESERVA/:id/:name/:lastname" element={<Reserva />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
