const AbstractManager = require("./AbstractManager");

class PlaylistsMaganer extends AbstractManager {
  static table = "playLists";
}

module.exports = PlaylistsMaganer;
