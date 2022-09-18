import Nav from "@components/Nav";
import api from "@services/api";
import { useState, useEffect } from "react";
import "./Reservar.css";
import repentecostes22footer from "@assets/repentecostes22footer.png";

export default function Reservar() {
  const [dataReserva, setDataReserva] = useState({});
  const handleReserva = (event) => {
    event.preventDefault();
    console.warn(dataReserva);
    api
      .post("/api/reserva", dataReserva, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        console.warn(data);
      })
      .then(
        setTimeout(() => {
          window.location = "/INICIO";
        }, 500)
      )
      .catch("erreur");
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
        <form className="ProfileForm" onSubmit={handleReserva}>
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
            type="text"
            name="email"
            onChange={handleChangeRegister}
            required
          />
          <p>TELÉFONO</p>
          <input
            type="text"
            name="phone"
            onChange={handleChangeRegister}
            required
          />
          <p>NÚMERO DE RESERVAS</p>
          <input
            type="number"
            name="places"
            onChange={handleChangeRegister}
            pattern="[0-9]*"
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
