import React from "react";
import { useNavigate } from "react-router-dom";
import videoStart from "@assets/start.mp4";

import "./start.css";

function Start() {
  const navigate = useNavigate();
  const go = () => {
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };
  return (
    <div id="start">
      <video autoPlay loop muted className="videoStart" src={videoStart} />
      <div className="buttonStartContainer">
        <button type="button" className="buttonStart" onClick={go}>
          Go!
        </button>
      </div>
    </div>
  );
}

export default Start;
