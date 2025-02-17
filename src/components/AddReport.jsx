import React, { useState } from "react";

const AddReport = () => {
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const handleReportSubmit = async (e) => {
    e.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem("user"));
    // console.log(userDetails);
    try {
      const response = await fetch("http://localhost:5000/api/report/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userDetails._id,
          username: userDetails.username,
          address: address,
          category: category,
          description: description,
          latitude: 26.4639257,
          longitude: 87.2743846,
          reportingTime: "2025-02-17 02:28:36",
        }),
      });
      const data = await response.json();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="report-header mb-4">
        <h2 className="text-2xl font-bold text-primary">Add Report</h2>
      </div>
      <form className="report-form space-y-4 flex flex-col gap-4" onSubmit={handleReportSubmit}>
        <div className="location-input mt-4">
          <input
            type="text"
            placeholder="Enable Location or enter Address"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="incident-dropdown">
          <select
            name="incident"
            id="incident"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="submit-button">
          <button
            type="submit"
            className="py-2 px-4 bg-blue-400 text-white rounded-md hover:bg-blue-500 transition duration-300"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReport;
