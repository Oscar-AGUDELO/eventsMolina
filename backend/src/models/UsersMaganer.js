const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "users";

  insert(user) {
    return this.connection.query(
      `insert into ${UsersManager.table} (name, lastname, email, places, phone) values (?, ?, ?, ?, ?)`,
      [user.name, user.lastname, user.email, user.places, user.phone]
    );
  }

  findTicket(data) {
    return this.connection.query(
      `SELECT * FROM users WHERE (id = ? AND name = ? AND lastname = ?)`,
      [data.id, data.name, data.lastname]
    );
  }

  updateCheckIn(data) {
    return this.connection.query(
      `update users set validatedTicket = ? where id = ?`,
      [data.validatedTicket, data.id]
    );
  }

  updateAcquitted(data) {
    return this.connection.query(
      `update users set paidTime = CURRENT_TIMESTAMP, acquitted = ? where id = ?`,
      [data.acquitted, data.id]
    );
  }
}

module.exports = UsersManager;
