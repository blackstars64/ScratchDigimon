const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (username, mail, password) values (?,?,?)`,
      [user.username, user.mail, user.password]
    );
    return result.insertId;
  }

  async getByUsername(username) {
    const [result] = await this.database.query(
      `select * from ${this.table} where username LIKE ?`,
      [`%${username}%`]
    );
    return result;
  }

  async getByMail(mail) {
    const [result] = await this.database.query(
      `select * from ${this.table} where mail = ?`,
      [mail]
    );
    return result[0];
  }

  async getAll() {
    const [result] = await this.database.query(`select * from ${this.table}`);
    return result;
  }

  async update(id, user) {
    const [result] = await this.database.query(
      `update ${this.table} set username = ?, mail = ?, password = ? where id = ?`,
      [user.username, user.mail, user.password, id]
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
}

module.exports = UserManager;
