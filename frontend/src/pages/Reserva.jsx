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
        if (data) {
          setTicket(data);
        }
      })
      .then(async () => {
        if (ticket.name === undefined) {
          setQrText(`${ticket.problem}`);
        }
        if (ticket.places === "ANULADA07") {
          setQrText(`Esta reserva fue anulada`);
        } else {
          const date = await ticket.createTime
            .substring(0, 10)
            .split("-")
            .reverse()
            .join("/");
          const fechaPago =
            (await ticket.paidTime) !== null
              ? ticket.paidTime.substring(0, 10).split("-").reverse().join("/")
              : "";
          setQrText(
            `Ticket nº: ${ticket.id} || Fecha: ${date} || Plazas: ${
              ticket.places
            } || Nombre: ${ticket.name} ${ticket.lastname} || ${
              ticket.acquitted ? "Pagado el: " : "NO HA PAGADO"
            } ${fechaPago} || ${
              ticket.validatedTicket
                ? "¡Check-in ya realizado!"
                : "Check-in no Validado"
            } 
             `
          );
        }
      })
      .then(() => {
        QRCode.toDataURL(qrText).then((trasnData) => {
          setQrImage(trasnData);
        });
      })
      .catch("error");
  }, [qrText]);

  return (
    <div id="reservaContainer2">
      <div className="reservaContainer2a">
        <div className="fond1" />
        <div className="fond2">
          <p>
            Nº Ticket:{" "}
            {ticket.name
              ? `
            PENTE${ticket.id}Z${ticket.name.charAt(0)}${
                  ticket.id
                }${ticket.lastname.charAt(2)}`
              : "Problem"}
          </p>
          <p>
            Entradas:{" "}
            {ticket.places === "ANULADA07" ? "ANULADA" : ticket.places}
          </p>
          <p>
            Nombre: {ticket.name} {ticket.lastname}
          </p>
        </div>
        <div className="fond3">
          <img className="qrImage" src={qrImage} alt="qrImage" />
        </div>
      </div>

      {/*  <div id="reservaContainer">
      <div className="containContainerReserva">
        <img className="ticketfondo" src={ticketfondo} alt="ticketfondo" />
        <div className="textContainerReserva">
          <p>
            {ticket.name
              ? `
            PENTE${ticket.id}Z${ticket.name.charAt(0)}${
                  ticket.id
                }${ticket.lastname.charAt(2)}`
              : "Problem"}
          </p>
          <p>{ticket.places === "ANULADA07" ? "ANULADA" : ticket.places}</p>
          <p>
            {ticket.name} {ticket.lastname}
          </p>
        </div>
        <img className="qrImage" src={qrImage} alt="qrImage" />
      </div>
    </div> */}
    </div>
  );
}

export default Reserva;
