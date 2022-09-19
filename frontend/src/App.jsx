import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Start from "@pages/Start";
import Reserva from "@pages/Reserva";
import Home from "@pages/Home";
import Info from "@pages/Info";
import Reservar from "@pages/Reservar";
import Playlist from "@pages/Playlist";
import AdminLogin from "@pages/AdminLogin";
import AdminPanel from "@pages/AdminPanel";
import Rien from "@pages/Rien";
import Page404 from "@pages/Page404";
import CurrentPagesContext from "./PagesContexts";
import "./App.css";

function App() {
  const { screenWidth } = useContext(CurrentPagesContext);
  if (screenWidth > 850) {
    return (
      <div className="App" id="App">
        <div className="sectionfond" />
        <Routes>
          <Route path="/" element={<Rien />} />
          <Route path="/INICIO" element={<Rien />} />
          <Route path="/PLAYLIST" element={<Rien />} />
          <Route path="/RESERVAR" element={<Rien />} />
          <Route path="/CONTACTO" element={<Rien />} />
          <Route path="/RESERVA/:id/:name/:lastname" element={<Rien />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </div>
    );
  }
  return (
    <div className="App" id="App">
      <div className="sectionfond" />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/INICIO" element={<Home />} />
        <Route path="/PLAYLIST" element={<Playlist />} />
        <Route path="/RESERVAR" element={<Reservar />} />
        <Route path="/CONTACTO" element={<Info />} />
        <Route path="/RESERVA/:id/:name/:lastname" element={<Reserva />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
