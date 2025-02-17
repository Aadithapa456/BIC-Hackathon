const express = require("express");
const router = express.Router();
const {
  getAllReports,
  createReport,
} = require("../controller/reportingController");

router.route("/all").get(getAllReports);
router.route("/create").post(createReport);

module.exports = router;
