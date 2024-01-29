const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await tables.user.readEmail(email);

    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(user.password, password);

    if (verified) {
      delete user.password;
      const token = await jwt.sign(
        {
          id: user.id,
          isAdmin: user.is_admin,
        },
        process.env.APP_SECRET,
        { expiresIn: "1h" }
      );

      res.json({
        token,
        user,
      });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
