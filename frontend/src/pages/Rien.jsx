import React from "react";
import logo from "@assets/pentecostes22colores.png";
import "../App.css";

function Rien() {
  return (
    <div id="rienContainer">
      <p>ESTA WEB SOLO ESTÁ DISPONIBLE DESDE UN TELÉFONO MÓVIL</p>
      <img className="logoZ" src={logo} alt="logo" />
    </div>
  );
}

export default Rien;
