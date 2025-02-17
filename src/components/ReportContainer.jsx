import React from "react";
import ReportCard from "./ReportCard";
const ReportContainer = () => {
  return (
    <div className="report-container bg-gray-100 px-4 py-2">
      <div className="report-header text-xl font-bold">Recent Reports</div>
      <ReportCard />
    </div>
  );
};

export default ReportContainer;
