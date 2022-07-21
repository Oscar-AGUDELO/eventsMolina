import Nav from "@components/Nav";
import api from "@services/api";
import { useEffect } from "react";
import "./info.css";

export default function Info() {
  useEffect(() => {
    api
      .get("/api/events", { withCredentials: true })
      .then((res) => console.warn(res));
  }, []);
  return (
    <div id="infoContainer">
      <Nav />
      <main className="sectionsInfo">
        <section className="sectionInfo1">
          <p>
            Un momento musical de adoración y exaltación a Dios. Un espacio de
            encuentro e integración de jóvenes
          </p>
        </section>
      </main>
    </div>
  );
}
