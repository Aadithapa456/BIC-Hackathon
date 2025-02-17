import React from "react";

const Login = () => {
  return (
    <div className="login-wrapper bg-gray-200 flex justify-center items-center w-full h-full">
      <div className="login-container bg-white p-6 flex flex-col gap-10 rounded-lg shadow-md w-96">
        <div className="login-title text-xl font-semibold">Login to your Account</div>
        <div className="login-form">
          <form action="" className="flex flex-col gap-6">
            <div className="login-username flex flex-col">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                className="border p-2 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 mt-2"
                placeholder="Enter Username"
              />
            </div>
            <div className="login-password flex flex-col">
              <label htmlFor="password mb-2">Password:</label>
              <input
                type="password"
                id="password"
                className="border p-2 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 mt-2"
                placeholder="Enter Password"
              />
            </div>
            <div className="login-button">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
