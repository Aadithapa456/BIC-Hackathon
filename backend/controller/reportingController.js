const Report = require("../model/reporting");
const User = require("../model/user");

const getAllReports = async (req, res) => {
  try {
    const foundReport = await Report.find();
    res.status(200).json({ message: "success", reports: foundReport });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getMyReports = async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) res.status(400).json({ message: "userId is required" });
    const foundReport = await Report.find({ userId: userId });
    res.status(200).json({ message: "success", reports: foundReport });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const createReport = async (req, res) => {
  try {
    const {
      userId,
      username,
      category,
      description,
      address,
      reportingTime,
      upVote,
      downVote,
      image,
      latitude,
      longitude,
    } = req.body;
    if (
      !userId ||
      !username ||
      !category ||
      !description ||
      !address ||
      !reportingTime ||
      !latitude ||
      !longitude
    )
      return res.status(400).json({
        message:
          "userId, username, category, description, address, reportingTime, upVote, downVote, image, latitude and longitude are required",
      });

    const newReport = await Report.create({
      userId,
      username,
      category,
      description,
      address,
      reportingTime,
      upVote,
      downVote,
      image,
      latitude,
      longitude,
    });
    const formattedReport = {
      _id: newReport._id,
      userId: newReport.userId,
      userName: newReport.username,
      category: newReport.category,
      description: newReport.description,
      address: newReport.address,
      reportingTime: newReport.reportingTime,
      upVote: newReport.upVote,
      downVote: newReport.downVote,
      image: newReport.image,
      latitude: newReport.latitude,
      longitude: newReport.longitude,
    };
    res.status(201).json({
      message: "report created successfully",
      report: formattedReport,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const upDownVote = async (req, res) => {
  try {
    let { _id, upVote, downVote } = req.body;
    if (!_id) return res.status(400).json({ message: "_id is required" });
    const foundReport = await Report.findById(_id);
    if (!foundReport)
      res.status(404).json({ message: `Report with id ${_id} not found` });
    if (!upVote) {
      upVote = 0;
    }
    if (!downVote) {
      downVote = 0;
    }
    foundReport.upVote = foundReport.upVote + upVote;
    foundReport.downVote = foundReport.downVote + downVote;
    await foundReport.save();
    res.status(200).json({
      message: "Vote updated successfully",
      updatedReport: foundReport,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { getAllReports, getMyReports, createReport, upDownVote };
