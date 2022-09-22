/* eslint-disable react/jsx-no-comment-textnodes */
import Nav from "@components/Nav";
import api from "@services/api";
import { useEffect, useState } from "react";
import repentecostes22footer from "@assets/repentecostes22footer.png";
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
          <h2>WORSHIP</h2>
          <p>LISTA DE CANCIONES</p>
          <br />
          <br />
          <br />
          {playlist.map((song) => (
            <a href={song.url} target="_blank" rel="noreferrer">
              {song.title} // {song.artist}
            </a>
          ))}
        </section>
        <img className="logofooter" src={repentecostes22footer} alt="logo" />
      </main>
    </div>
  );
}
