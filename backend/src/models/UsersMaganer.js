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

  updateCheckIn(data, id) {
    return this.connection.query(
      `update users set validatedTicket = ? where id = ?`,
      [data.validatedTicket, id.id]
    );
  }

  updateAcquitted(data, id) {
    return this.connection.query(
      `update users set paidTime = NOW(), acquitted = ? where id = ?`,
      [data.acquitted, id.id]
    );
  }

  deleteReserva(data, id) {
    return this.connection.query(`update users set places = ? where id = ?`, [
      data.anular,
      id.id,
    ]);
  }
}

module.exports = UsersManager;
