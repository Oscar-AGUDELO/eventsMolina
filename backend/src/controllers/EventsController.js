/* eslint-disable camelcase */
const models = require("../models");

class EventsController {
  static browse = (req, res) => {
    models.events
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500).send("hola");
      });
  };

  static async search(req, res) {
    try {
      const { id } = req.body;
      models.events_has_users
        .findMyEvents({ id })
        .then(([result]) => {
          res.status(201).send({ message: "ok", result });
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

  static async deleteMyEvent(req, res) {
    try {
      const { events_id, users_id } = req.body;
      const { id } = req.params.id;
      models.events_has_users
        .findAndDeleteMyEvent({ events_id, users_id, id })
        .then(([result]) => {
          res.status(201).send({ message: "delete ok", result });
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
      const { events_id, users_id } = req.body;
      const getValidateSubscription =
        await models.events_has_users.getValidateSubscriptionByIds(
          events_id,
          users_id
        );
      if (getValidateSubscription[0].length > 0) {
        return res.status(400).json({
          status: 400,
          message: "User already subscribe on event",
        });
      }
      models.events_has_users
        .insert({ events_id, users_id })
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
}

module.exports = EventsController;
