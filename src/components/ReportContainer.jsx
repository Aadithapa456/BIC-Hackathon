import React from "react";
import ReportCard from "./ReportCard";
const ReportContainer = () => {
  return (
    <div className="report-container bg-gray-100 px-6 py-2 flex flex-col gap-6 rounded-lg">
      <div className="report-header text-xl font-bold py-4">Recent Reports</div>
      <ReportCard />
    </div>
  );
};

export default ReportContainer;
