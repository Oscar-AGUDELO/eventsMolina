import React from "react";
import Nav from "@components/Nav";
import { useNavigate } from "react-router-dom";
import iconoagenda from "@assets/iconoagenda.png";
import iconofacebook from "@assets/iconofacebook.png";
import iconoinstagram from "@assets/iconoinstagram.png";
import iconoubicacion from "@assets/iconoubicacion.png";
import iconoyoutube from "@assets/iconoyoutube.png";
import repentecostes22 from "@assets/repentecostes22.png";
import repentecostes22footer from "@assets/repentecostes22footer.png";
import biblie from "@assets/biblie.png";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();
  const goToReservas = () => {
    navigate("/RESERVAR");
  };
  return (
    <div id="homeContainer">
      <Nav />
      <main className="sectionsHome">
        <section className="sectionHome1">
          <div className="iconsRs">
            <a
              href="https://www.instagram.com/pentecostes.event/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icono" src={iconoinstagram} alt="instagram" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCPjNqj821VcC8XhdlR2q9pA"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icono" src={iconoyoutube} alt="iconoyoutube" />
            </a>
            <a
              href="https://www.facebook.com/pentecostes.event/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icono" src={iconofacebook} alt="iconofacebook" />
            </a>
          </div>
          <img className="logoHome" src={repentecostes22} alt="logo" />
          <p className="descriptionHome">
            Pentecostés es un espacio musical de adoración y exaltación en el
            que podrás disfrutar junto a muchos jóvenes de un encuentro con Dios
            que marcará tu vida.
          </p>
          <div className="infoHome">
            <h2>UBICACIÓN</h2>
            <p>Iglesia Apostólicos Molina de Segura</p>
          </div>
          <div className="infoHome">
            <img
              className="iconoubicacion"
              src={iconoubicacion}
              alt="iconoubicacion"
            />
            <a
              href="https://goo.gl/maps/S1nxVw5HDABx5LBU9"
              target="_blank"
              rel="noreferrer"
            >
              <p>Av. Valencia 36</p>
              <p>30500 Molina de Segura, Murcia</p>
            </a>
          </div>
          <div className="infoHome">
            <h2>FECHA</h2>
            <img className="iconoagenda" src={iconoagenda} alt="iconoagenda" />
            <p>25 de Noviembre 2022</p>
            <p>20:00 Horas</p>
          </div>
          <div className="infoHome">
            <h2>PREDICADOR INVITADO</h2>
            <img className="iconoabiblie" src={biblie} alt="biblie" />
            <a
              href="https://www.instagram.com/figueredo_ministro/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Pastor Edwin Figueredo</p>
            </a>
          </div>
          <div className="infoHome">
            <p className="verso">
              Cuando llegó el día de Pentecostés, estaban todos unánimes juntos.
              <br />
              <br />Y fueron todos llenos del Espíritu Santo, y comenzaron a
              hablar en otras lenguas, según el Espíritu les daba que hablasen.
              <br />
              <br />
              Hechos 2
            </p>
          </div>
          <div className="infoHome invitamos">
            <h2 className="invitamos">
              ¡NO TE PIERDAS LA FIESTA MÁS ESPERADA DEL AÑO!
            </h2>
          </div>
          <button
            type="button"
            className="buttonReservar"
            onClick={goToReservas}
          >
            RESERVAR ENTRADAS
          </button>

          <img className="logofooter" src={repentecostes22footer} alt="logo" />
          <br />
          <br />
          <br />
        </section>
      </main>
    </div>
  );
}
