import { useContext, useEffect, useState } from "react";
import api from "@services/api";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import icon from "@assets/iconNav.png";
import PagesContext from "../PagesContexts";

export default function Nav() {
  const { userConnected, setUserConnected, pathUrl, SetPathUrl } =
    useContext(PagesContext);
  const [openNav, SetOpenNav] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const convertedLocation = location.pathname.slice(1);
    SetPathUrl(convertedLocation);
  }, [location]);
  const clickOnburger = () => {
    SetOpenNav(!openNav);
  };
  const closeNav = () => {
    SetOpenNav(!openNav);
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
  return (
    <div id="navContainer">
      {!openNav ? (
        <div className="hiddenContainer">
          <h2 className="hiddenOnPage">{pathUrl}</h2>
          <button
            type="button"
            className="iconNavButton"
            onClick={clickOnburger}
          >
            <img className="iconNav" src={icon} alt="iconNav" />
          </button>
        </div>
      ) : (
        <div className="navContainerOpen">
          <div className="showContainerButton">
            <button
              type="button"
              className="iconNavButton"
              onClick={clickOnburger}
            >
              <img className="iconNav" src={icon} alt="iconNav" />
            </button>
          </div>
          <div className="linksNav">
            <Link
              onClick={closeNav}
              to="/INICIO"
              className="navLink"
              type="button"
            >
              INICIO
            </Link>
            <Link
              onClick={closeNav}
              to="/EDICIONES"
              className="navLink"
              type="button"
            >
              EDICIONES
            </Link>
            <Link
              onClick={closeNav}
              to="/CONTACTO"
              className="navLink"
              type="button"
            >
              CONTACTO
            </Link>
            {userConnected ? (
              <div className="userConnectedNav">
                <Link
                  onClick={closeNav}
                  to="/PERFIL"
                  className="navLink"
                  type="button"
                >
                  PERFIL
                </Link>
                <button
                  type="button"
                  className="navLink navLinkBotton"
                  onClick={handleLogout}
                >
                  DESCONECTARME
                </button>
              </div>
            ) : (
              <>
                <Link
                  onClick={closeNav}
                  to="/CONECTARME"
                  className="navLink"
                  type="button"
                >
                  LOGIN
                </Link>
                <Link
                  onClick={closeNav}
                  to="/REGISTRO"
                  className="navLink navLinkBotton"
                  type="button"
                >
                  RESERVAR
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
