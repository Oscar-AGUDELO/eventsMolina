import Nav from "@components/Nav";
import api from "@services/api";
import { useEffect, useState, useContext } from "react";
import "./playlist.css";
import CurrentPagesContext from "../PagesContexts";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.get("/api/users", { withCredentials: true }).then((res) => {
      setUsers(res.data);
    });
  }, []);

  const { userIsConnected } = useContext(CurrentPagesContext);

  console.warn(users);
  if (userIsConnected === "AdminIsHere") {
    return (
      <div id="eventsContainer">
        <Nav />
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
              <table align="center">
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
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr>
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
                        {user.places}
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
                        <button type="button">
                          {user.acquitted ? "Cobrado" : "Cobrar"}
                        </button>
                      </td>
                      <td style={{ padding: "1rem", border: "3px #ffffff " }}>
                        <button type="button">
                          {user.validatedTicket ? "Presente" : "Check-In"}
                        </button>
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
