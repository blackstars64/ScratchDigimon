const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  /* ******************************* Create ****************************** */

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (username, email, password, register_date) values (?,?,?,?)`,
      [user.username, user.email, user.password, user.registerDate]
    );
    return result.insertId;
  }

  /* ******************************* Read ****************************** */

  async getByUsername(username) {
    const [result] = await this.database.query(
      `select id, username, email, register_date, is_admin, digi_point from ${this.table} where username LIKE ?`,
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

  async readAll() {
    const [result] = await this.database.query(
      `select id, username, email, register_date, is_admin, digi_point from ${this.table}`
    );
    return result;
  }

  async readDate(registerDate) {
    const [rows] = await this.database.query(
      `SELECT id, nickname, email, register_date, is_admin, digi_point FROM ${this.table} WHERE register_date LIKE ?`,
      [`%${registerDate}%`]
    );
    return rows;
  }

  async readAllUsers() {
    const [rows] = await this.database.query(`SELECT id FROM ${this.table}`);
    return rows[rows.length - 1];
  }
  /* ******************************* Update ****************************** */

  async update(id, user) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET username = ?, email = ?, password = ?
        WHERE id = ?`,
      [user.username, user.email, user.password, id]
    );
    return result;
  }

  /* ******************************* Delete ****************************** */

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = UserManager;
