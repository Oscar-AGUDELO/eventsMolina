import Nav from "@components/Nav";
import api from "@services/api";
import { useState } from "react";
import "./Reservar.css";
import repentecostes22footer from "@assets/repentecostes22footer.png";
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
