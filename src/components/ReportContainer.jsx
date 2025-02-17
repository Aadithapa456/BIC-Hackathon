import React, { useEffect, useState } from "react";
import ReportCard from "./ReportCard";
const ReportContainer = () => {
  const [reports, setReports] = useState("");
  async function fetchReports() {
    try {
      const response = await fetch("http://localhost:5000/api/report/all");
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

  return (
    <div className="report-container bg-gray-100 px-6 py-2 flex flex-col gap-6 rounded-lg shadow-md">
      <div className="report-header text-xl font-bold py-4">Recent Reports</div>
      {reports
        ? reports.map((item, key) => {
            return <ReportCard data={item} key={key} />;
          })
        : "Not Found"}
    </div>
  );
};

export default ReportContainer;
