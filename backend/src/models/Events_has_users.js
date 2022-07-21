/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class Events_has_users extends AbstractManager {
  static table = "events_has_users";

  insert(subscribe) {
    return this.connection.query(
      `insert into ${this.table} (events_id, users_id) values (?, ?)`,
      [subscribe.events_id, subscribe.users_id]
    );
  }

  getValidateSubscriptionByIds(events_id, users_id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE events_id= ? AND users_id= ?`,
      [events_id, users_id]
    );
  }
}

module.exports = Events_has_users;
