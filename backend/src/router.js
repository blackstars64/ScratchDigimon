const express = require("express");

const router = express.Router();

/* ************************************************************************* */

const { hashPassword, verifyToken } = require("./services/auth");
const userControllers = require("./controllers/userControllers");
const authControllers = require("./controllers/authControllers");
const digimonsControllers = require("./controllers/digimonsControllers");
const messagesControllers = require("./controllers/messagesControllers");

/* ******************************** USER *********************************** */
// GET
router.get("/users", userControllers.browse);
router.get("/users/all", userControllers.readAllUsers);
router.get("/users/username", userControllers.readUser);
router.get("/users/date", userControllers.readDate);
router.get("/users/:id", userControllers.read);
// PUT
router.put("/users/:id", userControllers.edit);

// POST
router.post("/users", hashPassword, userControllers.add);

// DELETE
router.delete("/users/:id", userControllers.deleteUser);

/* ******************************** AUTH *********************************** */

router.post("/login", authControllers.login);

/* ******************************** DIGIMONS *********************************** */
// GET
router.get("/digimons", digimonsControllers.browse);
router.get("/digimons/all", digimonsControllers.readAllNumber);
router.get("/digimons/name", digimonsControllers.readDigimon);
router.get("/digimons/level", digimonsControllers.readLevel);
router.get("/digimons/:id", digimonsControllers.read);

// POST
router.post("/digimons", digimonsControllers.add);

// PUT
router.put("/digimons/:id", digimonsControllers.edit);

// DELETE
router.delete("/digimons/:id", digimonsControllers.deleted);

/* ******************************** MESSAGES *********************************** */
// GET
router.get("/messages", messagesControllers.browse);
router.get("/messages/:id", messagesControllers.read);

// POST
router.post("/messages", messagesControllers.add);

// PUT
router.put("/messages/:id", messagesControllers.edit);

// DELETE
router.delete("/messages/del/:id", messagesControllers.deleteMessage);
router.delete("/messages/delUser/:id", messagesControllers.deleteUser);

/* ************************************************************************* */
router.use(verifyToken);

module.exports = router;
