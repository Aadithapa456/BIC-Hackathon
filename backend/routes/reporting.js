const express = require("express");
const router = express.Router();
const createReport = require("../controller/reportingController");

router.route("/create").post(createReport);

module.exports = router;
