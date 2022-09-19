import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import icon from "@assets/iconNav.png";
import PagesContext from "../PagesContexts";

export default function Nav() {
  const { pathUrl, SetPathUrl } = useContext(PagesContext);
  const [openNav, SetOpenNav] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const convertedLocation = location.pathname.slice(1);
    SetPathUrl(convertedLocation);
    if (convertedLocation === "PLAYLIST") {
      SetPathUrl("SETLIST");
    }
  }, [location]);
  const clickOnburger = () => {
    SetOpenNav(!openNav);
  };
  const closeNav = () => {
    SetOpenNav(!openNav);
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
              to="/RESERVAR"
              className="navLink"
              type="button"
            >
              RESERVAR
            </Link>
            <Link
              onClick={closeNav}
              to="/PLAYLIST"
              className="navLink"
              type="button"
            >
              LISTA DE CANCIONES
            </Link>
            <Link
              onClick={closeNav}
              to="/CONTACTO"
              className="navLink navLinkBotton"
              type="button"
            >
              CONTACTO
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
