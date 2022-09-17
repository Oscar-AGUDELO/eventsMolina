/* eslint-disable no-restricted-globals */
import React, { useContext } from "react";
import Nav from "@components/Nav";
import api from "@services/api";
import { useNavigate } from "react-router-dom";
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
      navigate("/EVENTO");
    }, 500);
  };
  return (
    <div id="homeContainer">
      <Nav />
      <main className="sectionsHome">
        <section className="sectionHome2">
          {/* <img className="logoStart" src={logo} alt="logo" /> */}
          <div className="descriptionHome">
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
