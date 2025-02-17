import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.user));
      if (response.ok) {
        console.log(data);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="login-wrapper bg-gray-200 flex justify-center items-center w-full h-full">
      <div className="login-container bg-white p-6 flex flex-col gap-10 rounded-lg shadow-md w-96">
        <div className="login-title text-xl font-semibold">Login to your Account</div>
        <div className="login-form">
          <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="login-username flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="username"
                className="border p-2 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 mt-2"
                placeholder="Enter Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-password flex flex-col">
              <label htmlFor="password mb-2">Password:</label>
              <input
                type="password"
                id="password"
                className="border p-2 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 mt-2"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
