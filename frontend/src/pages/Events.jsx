import Nav from "@components/Nav";
import api from "@services/api";
import { useEffect, useState } from "react";
import "./events.css";
import EventModeList from "@components/EventModeList";

export default function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    api
      .get("/api/events", { withCredentials: true })
      .then((res) => setEvents(res.data));
  }, []);
  return (
    <div id="eventsContainer">
      <Nav />
      <main className="sectionsEvents">
        <section className="sectionEvents1">
          {events.map((event) => (
            <EventModeList key={event.id} event={event} />
          ))}
        </section>
      </main>
    </div>
  );
}
