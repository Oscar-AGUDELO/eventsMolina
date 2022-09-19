import React from "react";
import logo from "@assets/pentecostes22colores.png";
import "../App.css";

function Rien() {
  return (
    <div id="rienContainer">
      <h4>
        ESTA WEB SOLO ESTÁ DISPONIBLE <br /> DESDE UN TELÉFONO MÓVIL
      </h4>
      <img className="logoZ" src={logo} alt="logo" />
    </div>
  );
}

export default Rien;
