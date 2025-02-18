import React, { useEffect, useState } from "react";
import ReportCard from "./ReportCard";
const ReportContainer = () => {
  const [reports, setReports] = useState([]);
  async function fetchReports() {
    try {
      const response = await fetch(
        "http://localhost:5000/api/report/all?latitude=26.463877091528392&longitude=87.27500445706382"
      );
      const data = await response.json();
      console.log(data);
      setReports(data.reports);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    fetchReports();
  }, []);
  const handleVoteUpdate = (updatedReport) => {
    setReports((prevReports) =>
      prevReports.map((report) => (report._id === updatedReport._id ? updatedReport : report))
    );
  };
  return (
    <div className="report-container bg-gray-100 px-6 py-2 flex flex-col gap-6 rounded-lg shadow-md">
      <div className="report-header text-xl font-bold py-4">Recent Reports</div>
      {reports
        ? reports.map((item, key) => {
            return <ReportCard data={item} key={key} onVote={handleVoteUpdate}/>;
          })
        : "Not Found"}
    </div>
  );
};

export default ReportContainer;
