import Nav from "@components/Nav";
import api from "@services/api";
import { useState, useEffect } from "react";
import "./Reservar.css";
import repentecostes22footer from "@assets/repentecostes22footer.png";

export default function AdminLogin() {
  const [dataReserva, setDataReserva] = useState({
    name: "Admin",
    lastname: "ADMIN",
    email: "admin@admin.com",
    phone: "0123456789Admin",
  });
  const handleReserva = (event) => {
    console.warn(dataReserva);
    event.preventDefault();
    api
      .post("/api/auth/login", dataReserva, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        console.warn(data);
        if (data.userAdmin07 === "AdminIsHere") {
          localStorage.setItem("AdminPente", JSON.stringify(data.userAdmin07));
        }
      })
      .then(
        setTimeout(() => {
          window.location = "/admin-panel";
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
            // required
          />
          <p>APELLIDOS</p>
          <input
            type="text"
            name="lastname"
            onChange={handleChangeRegister}
            // required
          />
          <p>EMAIL</p>
          <input
            type="text"
            name="email"
            onChange={handleChangeRegister}
            // required
          />
          <p>TELÉFONO</p>
          <input
            type="text"
            name="phone"
            onChange={handleChangeRegister}
            // required
          />
          <br />
          <input id="save" type="submit" value="ENVIAR" />
        </form>
        <img className="logofooter" src={repentecostes22footer} alt="logo" />
      </section>
    </div>
  );
}
