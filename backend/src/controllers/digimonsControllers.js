const tables = require("../tables");

/* ******************************* GET ****************************** */

const browse = async (req, res, next) => {
  try {
    const digimons = await tables.digimons.readAll();
    res.json(digimons);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const digimon = await tables.digimons.read(id);
    if (digimon) {
      res.json(digimon);
    } else {
      res.status(404).json({ message: "Digimon not found" });
    }
  } catch (err) {
    next(err);
  }
};

const readDigimon = async (req, res, next) => {
  try {
    const { name } = await req.query;
    const digimon = await tables.digimons.readName(name);

    if (digimon == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(digimon);
    }
  } catch (err) {
    next(err);
  }
};

const readLevel = async (req, res, next) => {
  try {
    const { level } = await req.query;
    const digimon = await tables.digimons.readLevel(level);

    if (digimon == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(digimon);
    }
  } catch (err) {
    next(err);
  }
};

const readAllNumber = async (req, res, next) => {
  try {
    const digimon = await tables.digimons.readAllDigimons();
    res.json(digimon);
  } catch (err) {
    next(err);
  }
};
/* ******************************* POST ****************************** */

const add = async (req, res, next) => {
  try {
    const { name, img, level } = req.body;
    const newDigimon = await tables.digimons.create({
      name,
      img,
      level,
    });
    res.status(201).json(newDigimon);
  } catch (err) {
    next(err);
  }
};

/* ******************************* PUT ****************************** */

const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, img, level } = req.body;

    if (!req.body) {
      return res.status(400).json({ message: "Body is missing" });
    }

    const digimon = await tables.digimons.read(id);

    if (!digimon) {
      return res.status(404).json({ message: "Digimon not found" });
    }

    const updatedFields = {};

    if (name !== undefined) {
      updatedFields.name = name;
    }
    if (img !== undefined) {
      updatedFields.img = img;
    }
    if (level !== undefined) {
      updatedFields.level = level;
    }

    const updatedDigimon = await tables.digimons.update(id, updatedFields);

    if (updatedDigimon === 0) {
      return res.status(500).json({ message: "Update fail" });
    }

    const readDigimonUpdated = await tables.digimons.read(id);
    return res.json({ message: "Success Update", digimon: readDigimonUpdated });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/* ******************************* DELETE ****************************** */

const deleted = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDigimon = await tables.digimons.delete(id);
    if (deletedDigimon) {
      res.json({ message: "Digimon deleted" });
    } else {
      res.status(404).json({ message: "Digimon not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  browse,
  read,
  readDigimon,
  readLevel,
  readAllNumber,
  add,
  edit,
  deleted,
};
