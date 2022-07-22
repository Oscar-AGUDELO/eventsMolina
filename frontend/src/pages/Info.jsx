import Nav from "@components/Nav";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./info.css";

export default function Info() {
  // useEffect(() => {
  //   api
  //     .get("/api/events", { withCredentials: true })
  //     .then((res) => console.warn(res));
  // }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l888l1n",
        "template_p39aa59",
        form.current,
        "w0C6cHCwecKHHl9OB"
      )
      .then(
        (result) => {
          console.warn(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  const [contact, setContact] = useState([]);
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
        <h1>¡SÍGUENOS!</h1>
        <br />
        <br />
        <p>Nuestras redes sociales :</p>
        <br />
        <section className="sectionInfo1">
          <a href="https://www.facebook.com/ApostolicosMolina">
            <img
              className="logoRedes"
              alt="Facebook"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
            />
          </a>
          <br />
          <a href="https://www.instagram.com/apostolicosmolina">
            <img
              className="logoRedes"
              alt="Instagram"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
            />
          </a>
          <br />
          <a href="https://www.youtube.com/">
            <img
              className="logoRedes"
              alt="Youtube"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
            />
          </a>
        </section>
        <br />
        <br />
        <p>
          Si tienes alguna duda, pregunta o sugerencia, no dudes en contactarte
          con nosotros
        </p>
        <form className="contactForm" onSubmit={sendEmail} ref={form}>
          <p>Nombre</p>
          <input type="text" name="name" onChange={handleChangeContact} />
          <p>Mail</p>
          <input type="text" name="email" onChange={handleChangeContact} />
          <p>Mensaje</p>
          <textarea type="text" name="message" onChange={handleChangeContact} />
          <input id="save" type="submit" value="Enviar" />
        </form>
      </main>
    </div>
  );
}
