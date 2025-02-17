import React, { useState } from "react";

const AddReport = () => {
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState(26.4639257); // Random latitude
  const [longitude, setLongitude] = useState(87.2743846); // Random longitude

  const handleReportSubmit = async (e) => {
    e.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem("user"));
    try {
      const response = await fetch(`http://localhost:5000/api/report/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userDetails._id,
          title: title,
          username: userDetails.username,
          address: address,
          category: category,
          description: description,
          latitude: latitude,
          longitude: longitude,
          reportingTime: new Date().toISOString(),
        }),
        // body: JSON.stringify({
        //   title: "Accident",
        //   userId: "67b2e567c498bbeba5e2a3b5",
        //   username: "BIC",
        //   category: "Fire",
        //   description: "Fire in a house",
        //   address: "Biratnagar-7, Bhrikuti chowk",
        //   reportingTime: "2025-02-17 02:28:36",
        //   // "upVote": "",
        //   // "downVote": "",
        //   // "image": "",
        //   latitude: 26.463587471917545,
        //   longitude: 87.27789972042355,
        // }),
      });
      const data = await response.json();
      console.log(data);
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
        <div className="title-input mt-4">
          <input
            type="text"
            placeholder="Enter Title"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
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
