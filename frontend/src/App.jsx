import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "@pages/Start";
import Home from "@pages/Home";
import Info from "@pages/Info";
import Events from "@pages/Events";
import Profile from "@pages/Profile";
import SelectEvent from "@pages/SelectEvent";
// import fondodark from "@assets/fondo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App" id="App">
      <section className="sectionfond">
        {/* <img className="imgHome" src={fondodark} alt="fondo" /> */}
      </section>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/INICIO" element={<Home />} />
        <Route path="/EDICIONES" element={<Events />} />
        <Route path="/PERFIL" element={<Profile />} />
        <Route path="/REGISTRO" element={<Profile />} />
        <Route path="/CONECTARME" element={<Profile />} />
        <Route path="/CONTACTO" element={<Info />} />
        <Route path="/EVENTO" element={<SelectEvent />} />
      </Routes>
    </div>
  );
}

export default App;
