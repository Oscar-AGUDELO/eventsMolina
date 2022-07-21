import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "@pages/Start";
import Home from "@pages/Home";
import Info from "@pages/Info";
import Events from "@pages/Events";
import Profile from "@pages/Profile";
import SelectEvent from "@pages/SelectEvent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/info" element={<Info />} />
        <Route path="/event" element={<SelectEvent />} />
      </Routes>
    </div>
  );
}

export default App;
