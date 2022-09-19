const express = require("express");

const {
  ConnexionController,
  UsersController,
  DatasController,
} = require("./controllers");

const router = express.Router();

router.post("/auth/login", ConnexionController.login);
router.put("/users/checkIn/:id", UsersController.checkIn);
router.put("/users/deleteReserva/:id", UsersController.anular);
router.put("/users/acquitted/:id", UsersController.acquitted);
router.post("/reserva", UsersController.subscribe);
router.get("/users/:id/:name/:lastname", UsersController.ticket);
router.get("/users", UsersController.browse);
router.get("/playlists", DatasController.browse);

module.exports = router;
