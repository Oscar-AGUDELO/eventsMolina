import Nav from "@components/Nav";
import api from "@services/api";
import { useEffect, useState } from "react";
import "./playlist.css";

export default function Playlist() {
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    api.get("/api/playlists", { withCredentials: true }).then((res) => {
      setPlaylist(res.data);
      console.warn(playlist);
    });
  }, []);
  return (
    <div id="eventsContainer">
      <Nav />
      <main className="sectionsEvents">
        <section className="sectionEvents1">
          {playlist.map((song) => (
            <div>{song.title}</div>
          ))}
        </section>
      </main>
    </div>
  );
}
