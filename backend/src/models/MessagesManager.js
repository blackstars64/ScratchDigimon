const AbstractManager = require("./AbstractManager");

class MessagesManager extends AbstractManager {
  constructor() {
    super({ table: "messages" });
  }

  async create(message) {
    const [result] = await this.database.query(
      `insert into ${this.table} (message, user_id, received) values (?,?,?)`,
      [message.message, message.userId, message.received]
    );
    return result.insertId;
  }

  async getAll() {
    const [result] = await this.database.query(`select * from ${this.table}`);
    return result;
  }

  async getByUserId(userId) {
    const [result] = await this.database.query(
      `select * from ${this.table} where user_id = ?`,
      [userId]
    );
    return result;
  }

  async update(id, message) {
    const [result] = await this.database.query(
      `update ${this.table} set message = ?, user_id = ?, received = ? where id = ?`,
      [message.message, message.userId, message.received, id]
    );
    return result.affectedRows > 0;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }

  async deleteByUserId(userId) {
    const [result] = await this.database.query(
      `delete from ${this.table} where user_id = ?`,
      [userId]
    );
    return result.affectedRows > 0;
  }
}

module.exports = MessagesManager;
