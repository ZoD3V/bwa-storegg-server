const config = require("../../config");
const jwt = require("jsonwebtoken");

const Player = require("../player/model");

module.exports = {
  isLoginAdmin: async (req, res, next) => {
    if (req.session.user === null || req.session.user === undefined) {
      req.flash("alertMessage", `Mohon maaf sesi anda telah habis`);
      req.flash("alertStatus", "danger");
      res.redirect("/");
    } else {
      next();
    }
  },
  authLogin: async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const data = jwt.verify(token, config.jwtkey);
      const player = await Player.findOne({ _id: data.player.id });
      if (!player) {
        throw new Error();
      }
      req.player = player;
      req.token = token;
      next();
    } catch (error) {
      res.status(401).json({ msg: "Not authorize" });
    }
  },
};
