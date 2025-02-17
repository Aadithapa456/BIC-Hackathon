import React from "react";

const AddReport = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="report-header mb-4">
        <h2 className="text-2xl font-bold text-primary">Add Report</h2>
      </div>
      <div className="report-form space-y-4">
        <div className="location-input">
          <input
            type="text"
            placeholder="Enable Location or enter Address"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="incident-dropdown">
          <select
            name="incident"
            id="incident"
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select incident type</option>
            <option value="TC">Traffic Congestion</option>
            <option value="Accident">Accident</option>
            <option value="RC">Road Construction</option>
          </select>
        </div>
        <div className="description-form">
          <textarea
            name="incident-desc"
            id="incident-desc"
            placeholder="Describe the incident"
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="submit-button">
          <button className="py-2 px-4 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition duration-300">
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReport;
