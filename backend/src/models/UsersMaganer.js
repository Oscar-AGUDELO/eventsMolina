const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "users";

  getUserByEmail(email) {
    return this.connection.query(`SELECT * FROM users WHERE email = ?`, [
      email,
    ]);
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UsersManager.table} (name, lastname, email, password, phone) values (?, ?, ?, ?, ?)`,
      [user.name, user.lastname, user.email, user.password, user.phone]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UsersManager.table} set email = ?, name= ?, lastname= ?, phone= ?, password= ? where id = ?`,
      [user.email, user.name, user.lastname, user.phone, user.password, user.id]
    );
  }
}

module.exports = UsersManager;
