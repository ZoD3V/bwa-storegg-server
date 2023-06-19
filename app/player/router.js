var express = require("express");
var router = express.Router();
const multer = require("multer");
const os = require("os");

const {
  landingPage,
  detailPage,
  category,
  checkout,
  history,
  historyDetail,
  dashboard,
  profile,
  editProfile,
} = require("./controller");
const { authLogin } = require("../middleware/auth");

/* GET home page. */
router.get("/landingpage", landingPage);
router.get("/category", category);
router.get("/history", authLogin, history);
router.post("/checkout", authLogin, checkout);
router.get("/:id/detail", detailPage);
router.get("/history/:id/detail", historyDetail);
router.get("/dashboard", authLogin, dashboard);
router.get("/profile", authLogin, profile);
router.put(
  "/profile/:id",
  authLogin,
  multer({ dest: os.tmpdir() }).single("image"),
  editProfile
);

module.exports = router;
