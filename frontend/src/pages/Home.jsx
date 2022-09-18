import Nav from "@components/Nav";
import { useNavigate } from "react-router-dom";
import iconoagenda from "@assets/iconoagenda.png";
import iconofacebook from "@assets/iconofacebook.png";
import iconoinstagram from "@assets/iconoinstagram.png";
import iconoubicacion from "@assets/iconoubicacion.png";
import iconoyoutube from "@assets/iconoyoutube.png";
import repentecostes22 from "@assets/repentecostes22.png";
import repentecostes22footer from "@assets/repentecostes22footer.png";
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
            <a href="https://example.com" target="_blank" rel="noreferrer">
              <img className="icono" src={iconoinstagram} alt="instagram" />
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer">
              <img className="icono" src={iconoyoutube} alt="iconoyoutube" />
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer">
              <img className="icono" src={iconofacebook} alt="iconofacebook" />
            </a>
          </div>
          <img className="logoHome" src={repentecostes22} alt="logo" />
          <p className="descriptionHome">
            Pentecostés es un espacio musical de exaltación junto a muchos
            jóvenes donde podrás tener un encuentro de impacto con Dios
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
            <p>Av. Valencia 36</p>
            <p>30500 Molina de Segura, Murcia</p>
          </div>
          <div className="infoHome">
            <h2>FECHA</h2>
            <img className="iconoagenda" src={iconoagenda} alt="iconoagenda" />
            <p>25 de Noviembre 2022</p>
            <p>20:00 Horas</p>
          </div>
          <div className="infoHome">
            <p className="verso">
              Cuando llegó el día de Pentecostés, estaban todos unánimes juntos.
              Y de repente vino del cielo un estruendo como de un viento recio
              que soplaba, el cual llenó toda la casa donde estaban sentados.
              Hecho 2:1-2
            </p>
          </div>
          <div className="infoHome invitamos">
            <h2 className="invitamos">
              TE INVITAMOS A QUE NO TE PIERDAS LA FIESTA MÁS ESPERADA DEL AÑO
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
        </section>
      </main>
    </div>
  );
}
