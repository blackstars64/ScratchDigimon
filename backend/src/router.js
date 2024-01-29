const express = require("express");

const router = express.Router();

/* ************************************************************************* */

const { hashPassword, verifyToken } = require("./services/auth");
const userControllers = require("./controllers/userControllers");
const authControllers = require("./controllers/authControllers");

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

/* ************************************************************************* */
router.get("/login", authControllers.login);
router.use(verifyToken);

module.exports = router;
