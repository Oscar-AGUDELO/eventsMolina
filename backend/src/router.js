const express = require("express");

const {
  EventsController,
  ConnexionController,
  UsersController,
} = require("./controllers");

const router = express.Router();

router.post("/api/auth/login", ConnexionController.login);
router.post("/api/auth/register", ConnexionController.register);

router.get("/api/events", EventsController.browse);
router.get("/api/myEvents", EventsController.search);
router.post("/api/events/subscribe", EventsController.subscribe);
// router.get("/items/:id", ItemController.read);
// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

router.get("/api/users", UsersController.browse);
router.put("/api/users/update/:id", UsersController.edit);

module.exports = router;
