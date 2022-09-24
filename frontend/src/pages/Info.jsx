import Nav from "@components/Nav";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./info.css";
import iconofacebook from "@assets/iconofacebook.png";
import iconoinstagram from "@assets/iconoinstagram.png";
import iconolinkedin from "@assets/iconolinkedin.png";
import repentecostes22footer from "@assets/repentecostes22footer.png";
import Swal from "sweetalert2";

export default function Info() {
  const form = useRef();
  const [contact, setContact] = useState([]);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_contact",
        "template_contact",
        form.current,
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
          Swal.fire({
            position: "center",
            icon: "error",
            title: "¡Ups! hay un problema...",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      );
  };
  const handleChangeContact = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div id="infoContainer">
      <Nav />
      <main className="sectionsInfo">
        <h3>
          SI TIENES ALGUNA PREGUNTA O SUGERENCIA, NO DUDES EN PONERTE EN
          CONTACTO CON NOSOTROS
        </h3>
        <form className="contactForm" onSubmit={sendEmail} ref={form}>
          <p>Nombre</p>
          <input type="text" name="name" onChange={handleChangeContact} />
          <p>Email</p>
          <input
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            name="email"
            onChange={handleChangeContact}
          />
          <p>Mensaje</p>
          <textarea type="text" name="message" onChange={handleChangeContact} />
          <input id="save" type="submit" value="Enviar" />
        </form>
        <h2>ORGANIZADOR</h2>
        <strong>Apostólicos Molina de Segura</strong>
        <div className="iconsRs">
          <a
            href="https://www.instagram.com/apostolicosmolina/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icono" src={iconoinstagram} alt="instagram" />
          </a>
          <a
            href="https://www.facebook.com/ApostolicosMolina"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icono" src={iconofacebook} alt="iconofacebook" />
          </a>
        </div>
        <div className="sponsors">
          <h2>SPONSORS</h2>
          <a
            href="https://www.linkedin.com/in/oscar-agudelo-pro/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icono" src={iconolinkedin} alt="iconolinkedin" />
            <p>Oscar Agudelo - Desarrollador</p>
          </a>
          <a
            href="https://www.instagram.com/cita.diaria/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icono" src={iconoinstagram} alt="iconoinstagram" />
            <p>Cita Diaria</p>
          </a>
          <a
            href="https://www.instagram.com/televisioncristianatvc/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icono" src={iconoinstagram} alt="iconoinstagram" />
            <p>Televisión Cristiana - TVC</p>
          </a>
        </div>
        <img className="logofooter" src={repentecostes22footer} alt="logo" />
      </main>
    </div>
  );
}
