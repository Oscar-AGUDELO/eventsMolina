/* eslint-disable no-restricted-globals */
import React, { useContext } from "react";
import Nav from "@components/Nav";
import api from "@services/api";
import { useNavigate } from "react-router-dom";
import image1 from "@assets/image1.jpg";
import PagesContext from "../PagesContexts";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();
  const { setSelectedEvent } = useContext(PagesContext);
  const goToSelectEvent = () => {
    api.get("/api/events", { withCredentials: true }).then((res) => {
      setSelectedEvent(res.data[res.data.length - 1]);
      localStorage.setItem(
        "selectedEvent",
        JSON.stringify(res.data[res.data.length - 1])
      );
    });
    setTimeout(() => {
      navigate("/event");
    }, 500);
  };
  return (
    <div id="homeContainer">
      <Nav />
      <main className="sectionsHome">
        <section className="sectionHome1">
          <img className="imgHome" src={image1} alt="logo" />
        </section>
        <section className="sectionHome2">
          <div className="descriptionHome">
            <h1>PENTECOSTÉS</h1>
            <br />
            Un momento musical de adoración y exaltación a Dios. Un espacio de
            encuentro e integración de jóvenes
          </div>
          <button
            type="button"
            className="buttonNextEdition"
            onClick={goToSelectEvent}
          >
            PRÓXIMA EDICIÓN
          </button>
        </section>
      </main>
    </div>
  );
}
