const mongoose = require("mongoose");

const reportSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    username: { type: String, required: true },
    category: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    reportingTime: { type: Date, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    upVote: { type: Number, default: 0 },
    downVote: { type: Number, default: 0 },
    image: { type: String, default: "" },
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
