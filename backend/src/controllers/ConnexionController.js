/* eslint-disable prefer-const */
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const models = require("../models");

class ConnexionController {
  static browse = (req, res) => {
    models.users
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500).send("hola");
      });
  };

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const [user] = await models.users.getUserByEmail(email);
      if (user[0]?.id === undefined) {
        return res.status(400).json({
          status: 400,
          message: "Email not found",
        });
      }
      const isPasswordValid = await bcrypt.compare(password, user[0].password);
      if (!isPasswordValid) {
        return res.status(400).json({
          status: 400,
          message: "Password is not correct",
        });
      }

      res.status(200).json({
        status: "success",
        message: "User is logged",
        user: user[0],
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
    return null;
  }

  static async register(req, res) {
    try {
      const { name, lastname, email, password, phone } = req.body;
      const hash = await bcrypt.hash(password, 10);
      let validationErrors = null;
      const getEmail = await models.users.getUserByEmail(email);
      if (getEmail[0].length > 0) {
        return res.status(400).json({
          status: 400,
          message: "Email already exist",
        });
      }

      validationErrors = Joi.object({
        email: Joi.string().email().max(255).required(),
        name: Joi.string().max(255).required(),
        lastname: Joi.string().max(255).required(),
        phone: Joi.string().max(255).required(),
      }).validate(
        { name, lastname, email, phone },
        { abortEarly: false }
      ).error;
      if (validationErrors) {
        return res.status(400).json({
          status: 400,
          message: "INVALID DATA",
        });
      }

      models.users
        .insert({ name, lastname, email, phone, password: hash })
        .then(([result]) => console.warn(result))
        .then(async () => {
          const getUser = await models.users.getUserByEmail(email);
          res
            .status(201)
            .send({ message: "register user ok", user: getUser[0][0] });
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

module.exports = ConnexionController;
