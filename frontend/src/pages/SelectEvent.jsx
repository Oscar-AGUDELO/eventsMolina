import Nav from "@components/Nav";
import api from "@services/api";
import { useContext } from "react";
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
      // .then(
      //   setTimeout(() => {
      //     window.location = "/profile";
      //   }, 500)
      // )
      .catch("erreur");
  };
  return (
    <div id="selectEventContainer">
      <Nav />
      <main className="sectionsSelectEvent">
        <section className="sectionSelectEvent1">
          <h1>BIENVENIDO A {selectedEvent.name}</h1>
          <p>{selectedEvent.description}</p>
          <br />
          <p>
            Queremos invitarte para que alabemos a Dios juntos y en armonia. ¡no
            te pierdas la fiesta más esperada del año!
          </p>
          <br />
          <h1>UBICACIÓN</h1>
          <p>{selectedEvent.address}</p>
          <br />
          <h1>FECHA</h1>
          <p>
            {selectedEvent.date} a las {selectedEvent.time} Horas{" "}
          </p>
          {userConnected ? (
            <>
              <p>
                Ya queda poco para formar parte de {selectedEvent.name}. ¡Haz
                click para adquirir tu entrada!
              </p>
              <button type="button" onClick={handleSaveEvent}>
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
