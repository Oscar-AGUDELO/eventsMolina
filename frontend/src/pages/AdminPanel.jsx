import Nav from "@components/Nav";
import api from "@services/api";
import { useEffect, useState, useContext } from "react";
import "./playlist.css";
import CurrentPagesContext from "../PagesContexts";

export default function AdminPanel() {
  const { userIsConnected } = useContext(CurrentPagesContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.get("/api/users", { withCredentials: true }).then((res) => {
      setUsers(res.data);
    });
  }, []);
  const updateAcquitted = (item) => {
    api
      .put(
        `/api/users/acquitted/${item}`,
        { acquitted: true },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then((data) => {
        console.warn(data.status);
      })
      .then(
        setTimeout(() => {
          window.location = "/admin-panel";
        }, 1000)
      )
      .catch("erreur");
  };
  const updateCheckIn = (item) => {
    api
      .put(
        `/api/users/checkIn/${item}`,
        { validatedTicket: true },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then((data) => {
        console.warn(data.status);
      })
      .then(
        setTimeout(() => {
          window.location = "/admin-panel";
        }, 1000)
      )
      .catch("erreur");
  };
  const deleteReserva = (item) => {
    api
      .put(
        `/api/users/deleteReserva/${item}`,
        { anular: "ANULADA07" },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then((data) => {
        console.warn(data.status);
      })
      .then(
        setTimeout(() => {
          window.location = "/admin-panel";
        }, 1000)
      )
      .catch("erreur");
  };
  const goOut = () => {
    localStorage.removeItem("AdminPente");
    setTimeout(() => {
      window.location = "/";
    }, 1000);
  };
  if (userIsConnected === "AdminIsHere") {
    return (
      <div id="eventsContainer">
        <Nav />
        <button type="button" onClick={goOut}>
          Desconexión
        </button>
        <main className="sectionsEvents">
          <section
            className="sectionEvents1"
            style={{
              width: "100vw",
              overflow: "scroll",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "start",
                width: "100vw",
                margin: "1rem 0 0 0",
              }}
            >
              <table
                align="center"
                style={{ margin: "1rem", border: "3px #ffffff solid" }}
              >
                <thead>
                  <tr>
                    <th
                      style={{ padding: "1rem", border: "3px #ffffff dashed" }}
                    >
                      Nº Ticket
                    </th>
                    <th style={{ border: "3px #ffffff dashed" }}>
                      Fecha Reserva
                    </th>
                    <th
                      style={{ padding: "1rem", border: "3px #ffffff dashed" }}
                    >
                      Plazas / Anulado
                    </th>
                    <th
                      style={{ padding: "1rem", border: "3px #ffffff dashed" }}
                    >
                      Nombre
                    </th>
                    <th
                      style={{ padding: "1rem", border: "3px #ffffff dashed" }}
                    >
                      Apellidos
                    </th>
                    <th
                      style={{ padding: "1rem", border: "3px #ffffff dashed" }}
                    >
                      Email
                    </th>
                    <th
                      style={{ padding: "1rem", border: "3px #ffffff dashed" }}
                    >
                      Teléfono
                    </th>
                    <th
                      style={{ padding: "1rem", border: "3px #ffffff dashed" }}
                    >
                      Fecha Pago
                    </th>
                    <th
                      style={{ padding: "1rem", border: "3px #ffffff dashed" }}
                    >
                      Click Pago
                    </th>
                    <th
                      style={{ padding: "1rem", border: "3px #ffffff dashed" }}
                    >
                      Click Check-In
                    </th>
                    <th
                      style={{ padding: "1rem", border: "3px #ffffff dashed" }}
                    >
                      Click Anular
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td style={{ padding: "1rem", border: "3px #ffffff" }}>
                        {user.id}
                      </td>
                      <td style={{ padding: "1rem", border: "3px #ffffff " }}>
                        {user.createTime
                          .substring(0, 10)
                          .split("-")
                          .reverse()
                          .join("/")}
                      </td>
                      <td style={{ padding: "1rem", border: "3px #ffffff " }}>
                        {user.places === "ANULADA07" ? "ANULADA" : user.places}
                      </td>
                      <td style={{ padding: "1rem", border: "3px #ffffff " }}>
                        {user.name}
                      </td>
                      <td style={{ padding: "1rem", border: "3px #ffffff " }}>
                        {user.lastname}
                      </td>
                      <td style={{ padding: "1rem", border: "3px #ffffff " }}>
                        {user.email}
                      </td>
                      <td style={{ padding: "1rem", border: "3px #ffffff " }}>
                        {user.phone}
                      </td>
                      <td style={{ padding: "1rem", border: "3px #ffffff " }}>
                        {user.paidTime
                          ? user.paidTime
                              .substring(0, 10)
                              .split("-")
                              .reverse()
                              .join("/")
                          : "*---*"}
                      </td>
                      <td style={{ padding: "1rem", border: "3px #ffffff " }}>
                        {user.places === "ANULADA07" ? (
                          "*---*"
                        ) : (
                          <button
                            type="button"
                            onClick={() => updateAcquitted(user.id)}
                          >
                            {user.acquitted ? "PAGADO" : "PAGAR"}
                          </button>
                        )}
                      </td>
                      <td style={{ padding: "1rem", border: "3px #ffffff " }}>
                        {user.places === "ANULADA07" ? (
                          "*---*"
                        ) : (
                          <button
                            type="button"
                            onClick={() => updateCheckIn(user.id)}
                          >
                            {user.validatedTicket ? "PRESENTE" : "Check-In"}
                          </button>
                        )}
                      </td>
                      <td style={{ padding: "1rem", border: "3px #ffffff " }}>
                        {user.places === "ANULADA07" ? (
                          "Debe volver a reservar"
                        ) : (
                          <button
                            type="button"
                            onClick={() => deleteReserva(user.id)}
                          >
                            ANULAR RESERVA
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    );
  }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
      }}
    >
      <p>No conectado</p>
    </div>
  );
}
