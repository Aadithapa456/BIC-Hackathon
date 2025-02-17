const express = require("express");
const router = express.Router();
const { getAllUsers, createUser } = require("../controller/userController");

router.route("/all").get(getAllUsers);
router.route("/create").post(createUser);

module.exports = router;
