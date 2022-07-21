import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import PagesContext from "../PagesContexts";

export default function Nav() {
  const { userConnected } = useContext(PagesContext);
  return (
    <div id="navContainer">
      <Link to="/home" className="navLink" type="button">
        Inicio
      </Link>
      <Link to="/events" className="navLink" type="button">
        Ediciones
      </Link>
      <Link to="/info" className="navLink" type="button">
        + Info
      </Link>
      <Link to="/profile" className="navLink" type="button">
        {userConnected ? "Perfil" : "Conexión"}
      </Link>
    </div>
  );
}
