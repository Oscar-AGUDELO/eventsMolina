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
      navigate("/event");
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
        <p>{event.date}</p>
        <p>{event.description}</p>
      </div>
      <img alt="logoEvent" src={event.logoURL} />
    </button>
  );
}
