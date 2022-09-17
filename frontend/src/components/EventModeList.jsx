import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./eventModelList.css";
import PagesContext from "../PagesContexts";

export default function EventModeList({ event }) {
  const { setSelectedEvent } = useContext(PagesContext);
  const navigate = useNavigate();
  const goToSelectEvent = () => {
    setSelectedEvent(event);
    if (event) {
      localStorage.setItem("selectedEvent", JSON.stringify(event));
    }
    setTimeout(() => {
      navigate("/EVENTO");
    }, 500);
  };
  return (
    <button
      id="eventModelListContainer"
      onClick={goToSelectEvent}
      type="button"
    >
      <div>
        <h1>{event.name}</h1>
        <p>
          {event.date} a las {event.time} horas
        </p>
        <p>{event.description}</p>
        <p>{event.price}</p>
      </div>
      <img className="logoEvent" alt="logoEvent" src={event.logoURL} />
    </button>
  );
}
