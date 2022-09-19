import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@assets/pentecostes22colores.png";
import "../App.css";

function Page404() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return (
    <div id="p404Container">
      <h4>
        PÁGINA <br />
        NO ENCONTRADA <br /> <strong>ERROR 404</strong>
      </h4>
      <img className="logoZ" src={logo} alt="logo" />
    </div>
  );
}

export default Page404;
