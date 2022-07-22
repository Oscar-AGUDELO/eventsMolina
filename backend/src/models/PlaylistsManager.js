const AbstractManager = require("./AbstractManager");

class PlaylistsManager extends AbstractManager {
  static table = "playlists";
}

module.exports = PlaylistsManager;
