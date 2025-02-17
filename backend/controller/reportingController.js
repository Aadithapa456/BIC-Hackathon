const Report = require("../model/reporting");
const User = require("../model/user");

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

module.exports = createReport;
