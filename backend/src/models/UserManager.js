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

  async read(id) {
    const [result] = await this.database.query(
      `select id, username, email, register_date, is_admin, digi_point from ${this.table} where id LIKE ?`,
      [id]
    );
    return result;
  }

  async readEmail(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return rows[0];
  }

  async readAll() {
    const [result] = await this.database.query(
      `select id, username, email, register_date, is_admin, digi_point from ${this.table}`
    );
    return result;
  }

  async readDate(registerDate) {
    const [rows] = await this.database.query(
      `SELECT id, username, email, register_date, is_admin, digi_point FROM ${this.table} WHERE register_date LIKE ?`,
      [`%${registerDate}%`]
    );
    return rows;
  }

  async readAllUsers() {
    const [rows] = await this.database.query(`SELECT id FROM ${this.table}`);
    return rows[rows.length - 1];
  }
  /* ******************************* Update ****************************** */

  async update(id, updatesFields) {
    const allowedFields = ["username", "email", "password", "digi_point"];

    const fieldsToUpdate = Object.keys(updatesFields).filter((field) =>
      allowedFields.includes(field)
    );

    const values = fieldsToUpdate.map((field) => updatesFields[field]);

    if (fieldsToUpdate.length === 0) {
      return 0;
    }

    const updateQuery = `UPDATE ${this.table} SET ${fieldsToUpdate
      .map((field) => `${field} = ?`)
      .join(", ")} WHERE id = ?`;

    values.push(id);

    const [result] = await this.database.query(updateQuery, values);

    return result.affectedRows;
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
