/* eslint-disable prefer-const */
const Joi = require("joi");
const bcrypt = require("bcryptjs");
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
        res.sendStatus(500).send("hola");
      });
  };

  static async edit(req, res) {
    console.warn(req.body);
    try {
      let { email, name, lastname, password, phone, repeatPassword, id } =
        req.body;
      const getEmail = await models.users.getUserByEmail(email);
      if (getEmail[0].length > 0 && getEmail[0][0].email !== email) {
        return res.status(400).json({
          status: 400,
          message: "Email already exist",
        });
      }
      if (password.length > 0 && password !== repeatPassword) {
        return res.status(400).json({
          status: 400,
          message: "Password is not correct",
        });
      }
      if (password === "" || password === undefined || password === null) {
        password = getEmail[0][0].password;
      }
      let validationErrors = null;
      if (email.length > 0) {
        validationErrors = Joi.object({
          email: Joi.string().email().max(255),
        }).validate(
          {
            email,
          },
          { abortEarly: false }
        ).error;
        if (validationErrors) {
          return res.status(400).json({
            status: 400,
            message: "INVALID DATA",
          });
        }
      }
      if (email === null || email === undefined || email === "") {
        email = undefined;
      }
      const hash = await bcrypt.hash(password, 10);
      if (password.length > 0 && password === repeatPassword) {
        password = hash;
      }
      models.users
        .update({
          email,
          name,
          lastname,
          phone,
          password,
          id,
        })
        .then(([result]) => console.warn(result))
        .then(async () => {
          const getUser = await models.users.getUserByEmail(email);
          res
            .status(201)
            .send({ message: "user update ok", user: getUser[0][0] });
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
