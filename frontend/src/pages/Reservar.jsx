import Nav from "@components/Nav";
import api from "@services/api";
import { useState } from "react";
import "./Reservar.css";
import repentecostes22footer from "@assets/repentecostes22footer.png";
import Merche from "@assets/Merch.png";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export default function Reservar() {
  const [dataReserva, setDataReserva] = useState({});
  const handleReserva = (event) => {
    event.preventDefault();
    api
      .post("/api/reserva", dataReserva, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        console.warn(data.status);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "¡Tu reserva ha sido confirmada!",
          showConfirmButton: false,
          timer: 1500,
        });
        emailjs
          .send(
            "service_contact",
            "template_reserva",
            dataReserva,
            "K_Pr45Bpob2jbHe-a"
          )
          .then(
            (result) => {
              console.warn(result.text);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Correo enviado!",
                showConfirmButton: false,
                timer: 2500,
              });
            },
            (error) => {
              console.error(error.text);
              Swal.fire({
                position: "center",
                icon: "error",
                title: "¡Ups! hay un problema...",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          );
      })
      .then(
        setTimeout(() => {
          window.location = "/INICIO";
        }, 2500)
      )
      .catch("erreur");
    Swal.fire({
      position: "center",
      icon: "error",
      title: "¡Ups! hay un problema...",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  const handleChangeRegister = (e) => {
    setDataReserva({
      ...dataReserva,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div id="reservarContainer">
      <Nav />
      <section className="sectionReservar">
        <br />
        <br />
        <div id="infoReservar">
          <div className="infoHome precio">
            <h2>
              PRE-VENTA <b>(22/09/22-25/10/22)</b>
            </h2>
            <p>10 EUR de 5 años en adelante</p>
          </div>
          <br />
          <br />
          <div className="infoHome precio">
            <h2>
              VENTA NORMAL <b>(26/10/22-25/11/22)</b>
            </h2>
            <p>13 EUR de 5 años en adelante</p>
            <br />
            <span>
              <p className="cupos">CUPOS LIMITADOS</p>
            </span>
          </div>
          <br />
          <br />
          <div className="infoHome precio">
            <h2>¿QUÉ INCLUYE MI TICKET?</h2>
            <p>- Entrada a #PENTECOSTES22</p>
            <p>- Pulsera identificativa</p>
            <p>- Concurso</p>
            <p>- Refrigerio</p>
          </div>
          <br />
          <br />
          <div className="infoHome precio">
            <h2>MERCH DISPONIBLE</h2>
            <img className="merche" src={Merche} alt="Merche" />
            <span>10 EUR</span>
          </div>
        </div>
        <br />
        ---------
        <br />
        <br />
        <br />
        <form className="ProfileForm" onSubmit={handleReserva}>
          <h2>FORMULARIO DE RESERVA</h2>
          <br />
          <p>NOMBRE</p>
          <input
            type="text"
            name="name"
            onChange={handleChangeRegister}
            required
          />
          <p>APELLIDOS</p>
          <input
            type="text"
            name="lastname"
            onChange={handleChangeRegister}
            required
          />
          <p>EMAIL</p>
          <input
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            name="email"
            placeholder="my-email@mail.com"
            onChange={handleChangeRegister}
            required
          />
          <p>TELÉFONO</p>
          <input
            type="text"
            pattern="^(?:(?:\+?[0-9]{2,4})?[ ]?[6789][0-9 ]{8,13})$"
            name="phone"
            placeholder="666555444"
            onChange={handleChangeRegister}
            required
          />
          <p>NÚMERO DE RESERVAS</p>
          <input
            type="number"
            name="places"
            min="1"
            pattern="^\d+$"
            onChange={handleChangeRegister}
            required
          />
          <br />
          <input id="save" type="submit" value="ENVIAR" />
        </form>
        <img className="logofooter" src={repentecostes22footer} alt="logo" />
      </section>
    </div>
  );
}
