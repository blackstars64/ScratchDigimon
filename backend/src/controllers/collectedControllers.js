const table = require("../tables");

/* ******************************* GET ****************************** */

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const digimon = await table.digimons.readDigimonCollected(id);
    if (digimon) {
      res.json(digimon);
    } else {
      res.status(404).json({ message: "Digimon not found" });
    }
  } catch (err) {
    next(err);
  }
};

/* ******************************* POST ****************************** */

const create = async (req, res, next) => {
  try {
    const { userId, digimonId } = req.body;
    const result = await table.digimons.create({ digimonId, userId });
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  read,
  create,
};
