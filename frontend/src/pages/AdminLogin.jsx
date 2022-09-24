import Nav from "@components/Nav";
import api from "@services/api";
import { useState } from "react";
import "./Reservar.css";
import repentecostes22footer from "@assets/repentecostes22footer.png";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export default function AdminLogin() {
  const [dataReserva, setDataReserva] = useState({});
  const [waiting, setWaiting] = useState(false);

  const sendEmail = () => {
    emailjs
      .send(
        "service_contact",
        "template_alerta",
        { text: "Alguien se ha conectado al admin" },
        "K_Pr45Bpob2jbHe-a"
      )
      .then(
        (result) => {
          console.warn(result.text);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Mensaje enviado!",
            showConfirmButton: false,
            timer: 2000,
          });
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  const handleReserva = (event) => {
    event.preventDefault();
    api
      .post("/api/auth/login", dataReserva, { withCredentials: true })
      .then((res) => res.data)
      .then(
        (data) => {
          if (data.userAdmin07 === "AdminIsHere") {
            localStorage.setItem(
              "AdminPente",
              JSON.stringify(data.userAdmin07)
            );
            sendEmail();
            setWaiting(!waiting);
            setTimeout(() => {
              window.location = "/admin-panel";
            }, 2000);
          }
        },
        (error) => {
          console.error(error.text);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "¡Contraseñas incorrectas!",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      );
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
          <br />
          <input id="save" type="submit" value="ENVIAR" />
          {waiting ? <p>Wait...</p> : ""}
        </form>
        <img className="logofooter" src={repentecostes22footer} alt="logo" />
      </section>
    </div>
  );
}
