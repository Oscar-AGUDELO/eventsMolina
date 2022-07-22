const AbstractManager = require("./AbstractManager");

class GuestsListManager extends AbstractManager {
  static table = "guestslist";
}

module.exports = GuestsListManager;
