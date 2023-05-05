var express = require("express");
var router = express.Router();
const multer = require("multer");
const os = require("os");

const { signUp, signin } = require("./controller");

/* GET home page. */
router.post("/signup", multer({ dest: os.tmpdir() }).single("image"), signUp);
router.post("/signin", signin);

module.exports = router;
