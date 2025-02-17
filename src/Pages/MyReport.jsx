import React, { useEffect, useState } from "react";

const MyReport = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchMyReports() {
      try {
        const userDetails = JSON.parse(localStorage.getItem("user"));
        const response = await fetch(`http://localhost:5000/api/report/user/${userDetails._id}`);
        const data = await response.json();
        setReports(data.reports);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchMyReports();
  }, []);

  return (
    <div className="my-report-container bg-gray-100 px-6 py-2 flex flex-col gap-6 rounded-lg shadow-md">
      <div className="report-header text-xl font-bold py-4">My Reports</div>
      {reports.length > 0
        ? reports.map((report, index) => (
            <div key={index} className="report-card bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{report.title}</h3>
              <p className="text-sm text-gray-600">{report.description}</p>
              <p className="text-xs text-gray-500">
                Reported on: {new Date(report.reportingTime).toLocaleString()}
              </p>
            </div>
          ))
        : "No reports found"}
    </div>
  );
};

export default MyReport;
