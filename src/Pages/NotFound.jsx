import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-wrapper flex justify-center items-center w-full h-full">
      <div className="not-found-container p-6 flex flex-col gap-10 rounded-lg w-96 text-center">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-xl font-semibold">Page Not Found</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
