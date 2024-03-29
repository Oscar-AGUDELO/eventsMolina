const models = require("../models");

class UsersController {
  static browse = (req, res) => {
    models.users
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500).send("error");
      });
  };

  static async ticket(req, res) {
    try {
      models.users
        .findTicket(req.params)
        .then(([result]) => {
          res.status(201).send({ message: "DATA is comming", result });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
    return null;
  }

  static async subscribe(req, res) {
    try {
      const data = req.body;
      models.users
        .insert(data)
        .then(([result]) => {
          res
            .status(201)
            .send({ message: "subscribe user on event ok", result });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
    return null;
  }

  static async checkIn(req, res) {
    const data = req.body;
    const id = req.params;
    try {
      models.users
        .updateCheckIn(data, id)
        .then(([result]) => {
          res.status(201).send({ message: "User check-in OK", result });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
    return null;
  }

  static async acquitted(req, res) {
    const data = req.body;
    const id = req.params;
    try {
      models.users
        .updateAcquitted(data, id)
        .then(([result]) => {
          res.status(201).send({ message: "User Pago OK", result });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
    return null;
  }

  static async anular(req, res) {
    const data = req.body;
    const id = req.params;
    try {
      models.users
        .deleteReserva(data, id)
        .then(([result]) => {
          res.status(201).send({ message: "Reserva Anulada", result });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
    return null;
  }
}

module.exports = UsersController;
