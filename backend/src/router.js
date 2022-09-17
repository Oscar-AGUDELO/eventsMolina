const express = require("express");

const {
  ConnexionController,
  UsersController,
  DatasController,
} = require("./controllers");

const router = express.Router();

router.post("/api/auth/login", ConnexionController.login);
router.put("/api/users/checkIn/:id", UsersController.checkIn);
router.put("/api/users/acquitted/:id", UsersController.acquitted);
router.post("/api/reserva", UsersController.subscribe);
router.get("/api/users/:id/:name/:lastname", UsersController.ticket);
router.get("/api/users", UsersController.browse);
router.get("/api/playlists", DatasController.browse);

module.exports = router;
