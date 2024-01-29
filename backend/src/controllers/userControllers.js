const tables = require("../tables");

/* ******************************* GET ****************************** */

const browse = async (req, res, next) => {
  try {
    const user = await tables.user.getAll();

    res.json(user);
  } catch (err) {
    next(err);
  }
};

const readAllUsers = async (req, res, next) => {
  try {
    const users = await tables.user.readAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const users = await tables.user.read(req.params.id);

    if (users == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    next(err);
  }
};
const readUser = async (req, res, next) => {
  try {
    const { username } = await req.query;
    const users = await tables.user.getByUsername(username);

    if (users == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    next(err);
  }
};

const readDate = async (req, res, next) => {
  try {
    const { date } = await req.query;
    const users = await tables.user.readDate(date);

    if (users == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    next(err);
  }
};

/* ******************************* POST ****************************** */

const add = async (req, res, next) => {
  const registerDate = new Date();
  try {
    const { username, mail, password } = req.body;

    const newUser = await tables.user.create({
      username,
      mail,
      password,
      registerDate,
    });

    res.json(newUser);
  } catch (err) {
    next(err);
  }
};

/* ******************************* Update ****************************** */

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;

    const updatedUser = await tables.user.update(id, {
      username,
      email,
      password,
    });

    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
};

/* ******************************* Delete ****************************** */

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    await tables.user.delete(id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  readAllUsers,
  read,
  readUser,
  readDate,
  add,
  edit,
  deleteUser,
};
