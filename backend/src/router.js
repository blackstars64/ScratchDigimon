const express = require("express");

const router = express.Router();

/* ************************************************************************* */

const userControllers = require("./controllers/userControllers");

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
router.post("/users", userControllers.add);

// DELETE
router.delete("/users/:id", userControllers.deleteUser);

/* ************************************************************************* */

module.exports = router;
