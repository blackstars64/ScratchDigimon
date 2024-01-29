const tables = require("../tables");

/* ******************************* POST ****************************** */

const add = (req, res, next) => {
  const received = new Date();
  const { message, userId } = req.body;

  try {
    const newMessage = tables.messages.create({ message, userId, received });
    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};

/* ******************************* PUT ****************************** */

const edit = (req, res, next) => {
  const messageId = req.params.id;
  const updatedMessage = req.body;

  try {
    const editedMessage = tables.messages.editMessage(messageId, {
      updatedMessage,
    });
    res.status(200).json(editedMessage);
  } catch (error) {
    next(error);
  }
};

/* ******************************* GET ****************************** */

const browse = (req, res, next) => {
  try {
    const messages = tables.messages.browseMessages();
    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};

const read = (req, res, next) => {
  const userId = req.params.id;

  try {
    const message = tables.messages.readMessage(userId);
    res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};

/* ******************************* DELETE ****************************** */

const deleteMessage = (req, res, next) => {
  const messageId = req.params.id;

  try {
    tables.messages.delete(messageId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const deleteUser = (req, res, next) => {
  const userId = req.params.id;

  try {
    tables.messages.deleteByUserId(userId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
  edit,
  browse,
  read,
  deleteMessage,
  deleteUser,
};
