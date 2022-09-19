import React, { useEffect, useState } from "react";
import api from "@services/api";
import QRCode from "qrcode";
import { useParams } from "react-router-dom";

import "./reserva.css";

function Reserva() {
  const { id, name, lastname } = useParams();
  const [ticket, setTicket] = useState({
    problem: "Hay un problema con la reserva o no existe",
  });
  const [qrImage, setQrImage] = useState("QR img not working");
  const [qrText, setQrText] = useState("QR text not working");

  useEffect(() => {
    api
      .get(`/api/users/${id}/${name}/${lastname}`, { withCredentials: true })
      .then((res) => res.data.result[0])
      .then((data) => {
        console.warn(data);
        if (data) {
          setTicket(data);
          console.warn(ticket);
        }
      })
      .then(() => {
        if (ticket.name === undefined) {
          setQrText(`${ticket.problem}`);
        } else {
          setQrText(`${ticket.name} : ${ticket.createTime}`);
        }
      })
      .then(() => {
        QRCode.toDataURL(qrText).then((trasnData) => {
          setQrImage(trasnData);
          console.warn(qrText);
        });
      })
      .catch("erreur");
  }, [qrText]);

  return (
    <div id="start">
      <img className="qrImage" src={qrImage} alt="qrImage" />
    </div>
  );
}

export default Reserva;
