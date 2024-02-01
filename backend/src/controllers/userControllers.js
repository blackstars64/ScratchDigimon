const tables = require("../tables");

/* ******************************* GET ****************************** */

const browse = async (req, res, next) => {
  try {
    const user = await tables.user.readAll();

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
    const { name } = await req.query;
    const users = await tables.user.getByUsername(name);

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
    const { registerDate } = await req.query;
    const users = await tables.user.readDate(registerDate);

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
    const { username, email, password } = req.body;

    const newUser = await tables.user.create({
      username,
      email,
      password,
      registerDate,
    });

    res.json(newUser);
  } catch (err) {
    next(err);
  }
};

/* ******************************* PUT ****************************** */

const edit = async (req, res) => {
  const { id } = req.params;
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Empty body" });
    }

    const { username, email, password, digiPoint } = req.body;

    const haveUser = await tables.user.read(id);

    if (!haveUser) {
      return res.status(404).json({ message: "user not found" });
    }

    const updatedFields = {};

    if (username !== undefined) {
      updatedFields.username = username;
    }
    if (email !== undefined) {
      updatedFields.email = email;
    }
    if (password !== undefined) {
      updatedFields.password = password;
    }
    if (digiPoint !== undefined) {
      updatedFields.digi_point = digiPoint;
    }

    const affectedRows = await tables.user.update(id, updatedFields);

    if (affectedRows === 0) {
      return res.status(500).json({ message: "Update fail" });
    }

    const editeduser = await tables.user.read(id);
    return res.json({ message: "Success Update", user: editeduser });
  } catch (err) {
    return res.status(500).json({ message: "Error on user update" });
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
