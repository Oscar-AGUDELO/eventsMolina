import Nav from "@components/Nav";
import api from "@services/api";
import { useContext, useState, useEffect } from "react";
import "./profile.css";
import PagesContext from "../PagesContexts";

export default function Profile() {
  const { userConnected, setUserConnected, setSelectedEvent, pathUrl } =
    useContext(PagesContext);
  const [modifyUser, setModifyUser] = useState(true);
  const [userLogin, setUserLogin] = useState({});
  const handleLogin = (event) => {
    event.preventDefault();
    api
      .post("/api/auth/login", userLogin, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        console.warn(data);
        if (data) {
          localStorage.setItem("userConnected", JSON.stringify(data.user));
        }
      })
      .then(
        setTimeout(() => {
          window.location = "/INICIO";
        }, 500)
      )
      .catch("erreur");
  };
  const handleChangeLogin = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };
  const [userRegister, setUserRegister] = useState({});
  const handleRegister = (event) => {
    event.preventDefault();
    if (
      userRegister.password === userRegister.repeatPassword ||
      userRegister.password === "" ||
      userRegister.repeatPassword === ""
    ) {
      api
        .post("/api/auth/Register", userRegister, { withCredentials: true })
        .then((res) => res.data)
        .then((data) => {
          console.warn(data);
          if (data) {
            localStorage.setItem("userConnected", JSON.stringify(data.user));
          }
        })
        .then(
          setTimeout(() => {
            window.location = "/INICIO";
          }, 500)
        )
        .catch("erreur");
    }
  };
  const handleChangeRegister = (e) => {
    setUserRegister({
      ...userRegister,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogout = () => {
    api
      .get("/api/auth/logout")
      .then((res) => {
        console.warn(res);
        setUserConnected({});
      })
      .then(
        setTimeout(() => {
          window.location = "/INICIO";
        }, 500)
      )
      .then(localStorage.removeItem("userConnected"))
      .catch((err) => {
        console.warn(err);
      });
  };
  const [userToModify, setUserToModify] = useState({});
  const handlePutMyAccount = (event) => {
    event.preventDefault();
    if (
      userToModify.password === userToModify.repeatPassword ||
      userToModify.password === "" ||
      userToModify.repeatPassword === ""
    ) {
      api
        .put(`/api/users/update/${userToModify.id}`, userToModify, {
          withCredentials: true,
        })
        .then((res) => res.data)
        .then((data) => {
          console.warn(data);
          if (data) {
            localStorage.setItem("userConnected", JSON.stringify(data.user));
          }
        })
        .then(
          setTimeout(() => {
            window.location = "/INICIO";
          }, 500)
        )
        .catch("erreur");
    }
  };
  const handleChangeModify = (e) => {
    setUserToModify({
      ...userToModify,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeModifyUser = () => {
    setModifyUser(!modifyUser);
    setUserToModify({
      email: userConnected.email,
      name: userConnected.name,
      lastname: userConnected.lastname,
      phone: userConnected.phone,
      password: "",
      repeatPassword: "",
      id: userConnected.id,
    });
  };
  const [myEvents, setMyEvents] = useState([]);
  useEffect(() => {
    api
      .post("/api/myEvents", userConnected, { withCredentials: true })
      .then((res) => setMyEvents(res.data.result));
  }, []);
  const handleGoToEvent = (item) => {
    console.warn(item);
    console.warn(userConnected);
    setSelectedEvent(item);
    localStorage.setItem("selectedEvent", JSON.stringify(item));
    setTimeout(() => {
      window.location = "/EVENTO";
    }, 50);
  };
  const handleDeleteEvent = (item) => {
    console.warn(item);
    console.warn(userConnected);
    api
      .delete(`/api/MyEvents/${item}/${userConnected.id}`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => {
        console.warn(data);
      })
      .then(
        setTimeout(() => {
          window.location = "/PERFIL";
        }, 50)
      )
      .catch("erreur");
  };
  if (userConnected) {
    return (
      <div id="profileContainer">
        <Nav />
        <main className="sectionsProfile">
          <section className="sectionProfile1">
            <h1>Mi perfil</h1>
            <div>
              <p>{userConnected.email}</p>
              {modifyUser ? (
                <div>
                  <p>
                    {userConnected.name} {userConnected.lastname}
                  </p>
                  <p>{userConnected.phone}</p>
                  <br />
                  <br />
                  <br />
                  <button type="button" onClick={handleChangeModifyUser}>
                    Modificar
                  </button>
                  <button type="button" onClick={handleLogout}>
                    Desconectarme
                  </button>
                </div>
              ) : (
                <form className="ProfileForm" onSubmit={handlePutMyAccount}>
                  <input
                    type="text"
                    name="name"
                    value={userToModify.name}
                    onChange={handleChangeModify}
                    placeholder="Nombre"
                  />
                  <input
                    type="text"
                    name="lastname"
                    value={userToModify.lastname}
                    onChange={handleChangeModify}
                    placeholder="Apellido"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={userToModify.phone}
                    onChange={handleChangeModify}
                    placeholder="Teléfono"
                  />
                  <input
                    type="password"
                    name="password"
                    value={userToModify.password}
                    onChange={handleChangeModify}
                    placeholder="Nueva contraseña"
                  />
                  <input
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir nueva contraseña"
                    value={userToModify.repeatPassword}
                    onChange={handleChangeModify}
                  />
                  <div>
                    <input id="save" type="submit" value="Guardar" />
                    <button type="button" onClick={handleChangeModifyUser}>
                      Cancelar
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>
          <section className="sectionProfile2">
            <br />
            <br />
            <h1>Mis eventos</h1>
            <br />
            {myEvents.map((event) => {
              return (
                <div key={event.id}>
                  <p>{event.name}</p>
                  <br />
                  <br />
                  <button
                    onClick={() => handleDeleteEvent(event.events_id)}
                    type="button"
                  >
                    Ya no voy
                  </button>
                  <button type="button" onClick={() => handleGoToEvent(event)}>
                    +Info
                  </button>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              );
            })}
          </section>
        </main>
      </div>
    );
  }
  return (
    <div id="profileContainer">
      <Nav />

      <main className="sectionsProfile">
        {pathUrl === "CONECTARME" ? (
          <section className="sectionProfile1">
            <h1>Conectarme</h1>
            <form className="ProfileForm" onSubmit={handleLogin}>
              <p>Mail</p>
              <input type="text" name="email" onChange={handleChangeLogin} />
              <p>Contraseña</p>
              <input
                type="password"
                name="password"
                onChange={handleChangeLogin}
              />
              <input id="save" type="submit" value="Conectarme" />
            </form>
          </section>
        ) : (
          <section className="sectionProfile2">
            <h1>Crear una cuenta</h1>
            <form className="ProfileForm" onSubmit={handleRegister}>
              <p>Nombre</p>
              <input type="text" name="name" onChange={handleChangeRegister} />
              <p>Apellido</p>
              <input
                type="text"
                name="lastname"
                onChange={handleChangeRegister}
              />
              <p>Mail</p>
              <input type="text" name="email" onChange={handleChangeRegister} />
              <p>Teléfono</p>
              <input type="text" name="phone" onChange={handleChangeRegister} />
              <p>Contraseña</p>
              <input
                type="password"
                name="password"
                onChange={handleChangeRegister}
              />
              <p>Repetir contraseña</p>
              <input
                type="password"
                name="repeatPassword"
                onChange={handleChangeRegister}
              />
              <input id="save" type="submit" value="Registrarme" />
            </form>
          </section>
        )}
      </main>
    </div>
  );
}
