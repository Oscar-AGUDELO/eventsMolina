import React from "react";
import { useNavigate } from "react-router-dom";
import videoStart from "@assets/FondoVertical.mp4";
import logo from "@assets/pentecostes22colores.png";

import "./start.css";

function Start() {
  const navigate = useNavigate();
  const go = () => {
    setTimeout(() => {
      navigate("/INICIO");
    }, 1000);
  };
  return (
    <div id="start">
      <video autoPlay loop muted className="videoStart" src={videoStart} />
      <div className="buttonStartContainer">
        <h2>¡BIENVENIDOS!</h2>
        <img className="logoStart" src={logo} alt="logo" />
        <button type="button" className="buttonStart" onClick={go}>
          INICIO
        </button>
      </div>
    </div>
  );
}

export default Start;
