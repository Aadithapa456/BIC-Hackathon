const express = require("express");
const router = express.Router();
const {
  getAllReports,
  getMyReports,
  createReport,
  upDownVote,
} = require("../controller/reportingController");

router.route("/all").get(getAllReports);
router.route("/my").get(getMyReports);
router.route("/create").post(createReport);
router.route("/vote").post(upDownVote);

module.exports = router;
