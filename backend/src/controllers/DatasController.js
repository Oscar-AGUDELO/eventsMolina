/* eslint-disable camelcase */
const models = require("../models");

class DatasController {
  static browse = (req, res) => {
    models.playLists
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500).send("hola");
      });
  };
}

module.exports = DatasController;
