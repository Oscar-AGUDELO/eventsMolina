const express = require("express");

const {
  EventsController,
  ConnexionController,
  UsersController,
  DatasController,
} = require("./controllers");

const router = express.Router();

router.post("/api/auth/login", ConnexionController.login);
router.post("/api/auth/register", ConnexionController.register);

router.get("/api/events", EventsController.browse);
router.post("/api/myEvents", EventsController.search);
router.post("/api/events/subscribe", EventsController.subscribe);
router.delete("/api/MyEvents/:id/:user", EventsController.deleteMyEvent);
// router.get("/items/:id", ItemController.read);
// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

router.get("/api/users", UsersController.browse);
router.put("/api/users/update/:id", UsersController.edit);

router.get("/api/guestsList", DatasController.browse1);
router.get("/api/playlists", DatasController.browse2);
router.get("/api/sponsorslist", DatasController.browse3);

module.exports = router;
