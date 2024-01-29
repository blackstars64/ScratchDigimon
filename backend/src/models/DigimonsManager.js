const AbstractManager = require("./AbstractManager");

class DigimonsManager extends AbstractManager {
  constructor() {
    super({ table: "digimons" });
  }

  /* ******************************* Create ****************************** */

  async create(digimon) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, img, level) values (?,?,?)`,
      [digimon.name, digimon.img, digimon.level]
    );
    return result.insertId;
  }

  /* ******************************* Read ****************************** */

  async read(id) {
    const [result] = await this.database.query(
      `select id, name, img, level from ${this.table} where id LIKE ?`,
      [id]
    );
    return result;
  }

  async readAll() {
    const [result] = await this.database.query(
      `select id, name, img, level from ${this.table}`
    );
    return result;
  }

  async readLevel(level) {
    const [rows] = await this.database.query(
      `SELECT id, name, img, level FROM ${this.table} WHERE level LIKE ?`,
      [`%${level}%`]
    );
    return rows;
  }

  async readName(name) {
    const [rows] = await this.database.query(
      `SELECT id, name, img, level FROM ${this.table} WHERE name LIKE ?`,
      [`%${name}%`]
    );
    return rows;
  }

  async readAllDigimons() {
    const [rows] = await this.database.query(`SELECT id FROM ${this.table}`);
    return rows[rows.length - 1];
  }

  /* ******************************* Update ****************************** */

  async update(id, updatesFields) {
    const allowedFields = ["name", "img", "level"];

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
    return result.affectedRows;
  }
}

module.exports = DigimonsManager;
