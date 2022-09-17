/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Nav from "@components/Nav";
import api from "@services/api";
import { useContext, useEffect, useState } from "react";
import "./selectEvent.css";
import PagesContext from "../PagesContexts";

export default function Events() {
  const { selectedEvent, userConnected } = useContext(PagesContext);
  const handleSaveEvent = (event) => {
    const subscribe = {
      events_id: selectedEvent.id,
      users_id: userConnected.id,
    };
    event.preventDefault();
    api
      .post(`/api/events/subscribe`, subscribe, {
        withCredentials: true,
      })
      .then((res) => console.warn(res.data))
      .then(
        setTimeout(() => {
          window.location = "/PERFIL";
        }, 50)
      )
      .catch("erreur");
  };
  const [guestsList, setGuestsList] = useState([]);
  useEffect(() => {
    api
      .get("/api/guestsList", { withCredentials: true })
      .then((res) => setGuestsList(res.data));
  }, []);
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    api
      .get("/api/playlists", { withCredentials: true })
      .then((res) => setPlaylists(res.data));
  }, []);
  const [sponsorslist, setSponsorslist] = useState([]);
  useEffect(() => {
    api
      .get("/api/sponsorslist", { withCredentials: true })
      .then((res) => setSponsorslist(res.data));
  }, []);
  return (
    <div id="selectEventContainer">
      <Nav />
      <main className="sectionsSelectEvent">
        <section className="sectionSelectEvent1">
          <h1>BIENVENIDO A {selectedEvent.name}</h1>
          <br />
          <p>{selectedEvent.description}</p>

          <br />
          <br />
          <br />
          <p>
            Queremos invitarte para que alabemos a Dios juntos y en armonia. ¡no
            te pierdas la fiesta más esperada del año!
          </p>

          <br />
          <br />
          <br />
          <h1>UBICACIÓN</h1>
          <br />
          <p>{selectedEvent.address}</p>

          <br />
          <br />
          <br />
          <h1>FECHA</h1>
          <br />
          <p>
            {selectedEvent.date} a las {selectedEvent.time} Horas{" "}
          </p>
          <br />
          <br />
          <br />
          <h1>INVITADOS</h1>
          <br />
          {guestsList.map((guest) => {
            return (
              <div key={guest.id} className="guestContainer">
                <img
                  className="photoGuest"
                  alt={guest.name}
                  src={guest.photo}
                />
                <strong>{guest.name}</strong>
              </div>
            );
          })}
          <br />
          <br />
          <br />
          <h1>LISTA DE CANCIONES</h1>
          <br />
          {playlists.map((song) => {
            return (
              <div key={song.id} className="songContainer">
                <strong>{song.title}</strong>
                <p>{song.artist}</p>
                <a href={song.url}>Play</a>
              </div>
            );
          })}
          <br />
          <br />
          <br />
          <h1>SPONSORS</h1>
          <br />
          {sponsorslist.map((sponsor) => {
            return (
              <div key={sponsor.id} className="sponsorContainer">
                <img
                  className="logoSponsor"
                  alt={sponsor.name}
                  src={sponsor.logo}
                />
                <strong>{sponsor.name}</strong>

                <a href={sponsor.moreInfo}>+Info</a>
              </div>
            );
          })}
          <br />
          <br />
          <br />
          <h1>PRECIO</h1>
          <br />
          <p>{selectedEvent.price}</p>
          <br />
          <br />
          <br />
          {!userConnected ? (
            <>
              <p>
                Ya queda poco para formar parte de {selectedEvent.name}.
                <br />
                <br />
                ¡Haz click para adquirir tu entrada!
              </p>
              <button
                className="subscribeButton"
                type="button"
                onClick={handleSaveEvent}
              >
                RESERVAR MI ENTRADA
              </button>
            </>
          ) : (
            <p>
              Ya queda poco para formar parte de {selectedEvent.name}. Para
              adquirir tu entrada, crea una cuenta o conéctate. ¡Vuelve aquí
              cuando lo hayas hecho!
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
