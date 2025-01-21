import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUserName(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    axios
      .post("http://localhost:5000/login", { username, password })
      .then((response) => {
        const { token, refresh_token } = response?.data;
        dispatch(setCurrentUser( {username} ));
        localStorage.setItem('token', token)
        localStorage.setItem('refreshToken', refresh_token)
        // navigate("/products");
        navigate("/profile");
      })
      .catch((err) => {
        const errorMessage =
          err.response.data.message || "Something went wrong";
        setError(errorMessage);
      });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="w-28"
        />
      </div>

      <div className="w-full max-w-md bg-white p-6 border border-gray-300 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Sign in</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Sign in
          </button>
        </form>

        {error && (
          <p className="text-red-600 text-center bg-red-100 border border-red-400 rounded-md text-sm mt-4 px-3 py-2">
            {error}
          </p>
        )}

        <p className="text-xs text-gray-600 mt-4">
          By continuing, you agree to Amazon's{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Notice
          </a>
          .
        </p>

        <div className="mt-4 text-sm">
          <Link className="text-blue-500 hover:underline" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
