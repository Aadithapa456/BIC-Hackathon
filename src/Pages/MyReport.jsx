import { ThumbsDown, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const MyReport = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchMyReports() {
      try {
        const userDetails = JSON.parse(localStorage.getItem("user"));
        const response = await fetch(
          `http://localhost:5000/api/report/my?userId=${userDetails._id}`
        );
        const data = await response.json();
        console.log(data);

        setReports(data.reports);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchMyReports();
  }, []);

  return (
    <div className="my-report-container bg-gray-100 px-6 py-2 pb-4 flex flex-col gap-6 rounded-lg shadow-md">
      <div className="report-header text-xl font-bold py-4">My Reports</div>
      {reports.length > 0
        ? reports.map((report, index) => (
            <div
              key={index}
              className="bg-white rounded-xl py-4 px-5 shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800 sm:flex justify-items-start items-center gap-3">
                  {report.title}
                  <p className="text-white text-xs px-2 py-1 rounded-full bg-red-500">
                    {report.category}
                  </p>
                </h3>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <ThumbsUp className="w-5 h-5 text-green-500" />
                    <span className="font-medium">{report.upVote}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ThumbsDown className="w-5 h-5 text-red-500" />
                    <span className="font-medium">{report.downVote}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{report.description}</p>
              <div className="text-sm text-gray-500">
                Reported on: {new Date(report.reportingTime).toLocaleString()}
              </div>
            </div>
          ))
        : "No reports found"}
    </div>
  );
};

export default MyReport;
