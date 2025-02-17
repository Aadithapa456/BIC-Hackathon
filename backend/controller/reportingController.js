const Report = require("../model/reporting");
const User = require("../model/user");

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

const getAllReports = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    if (!latitude || !longitude)
      return res
        .status(400)
        .json({ message: "latitude, longitude are required" });
    const foundReport = await Report.find();
    const filteredReport = foundReport.filter((location) => {
      const distance = getDistanceFromLatLonInKm(
        location.latitude,
        location.longitude,
        latitude,
        longitude
      );
      return distance < 10.0;
    });
    const formattedFilteredReport = filteredReport.map((report) => ({
      _id: report._id,
      title: report.title,
      userId: report.userId,
      userName: report.username,
      category: report.category,
      description: report.description,
      address: report.address,
      reportingTime: report.reportingTime,
      upVote: report.upVote,
      downVote: report.downVote,
      image: report.image,
      latitude: report.latitude,
      longitude: report.longitude,
    }));
    // console.log(`Distance: ${distance.toFixed(2)} km`);
    res
      .status(200)
      .json({ message: "success", reports: formattedFilteredReport });
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
      title,
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
      !title ||
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
          "title, userId, username, category, description, address, reportingTime, upVote, downVote, image, latitude and longitude are required",
      });

    const newReport = await Report.create({
      title,
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
      title: newReport.title,
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
