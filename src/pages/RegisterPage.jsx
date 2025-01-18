import React, { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.repassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
        alert("Account created successfully!");
        // Redirect or additional logic
      } else {
        const error = await response.json();
        console.error("Registration failed:", error);
        alert(error.message || "Registration failed");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {/* Logo Section */}
      <div className="mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="w-28"
        />
      </div>

      {/* Register Form */}
      <div className="w-full max-w-md bg-white p-6 border border-gray-300 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Create account</h1>

        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="At least 6 characters"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              required
            />
            <p className="text-xs text-gray-600 mt-1">
              Passwords must be at least 6 characters.
            </p>
          </div>

          {/* Re-enter Password Input */}
          <div className="mb-4">
            <label
              htmlFor="repassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Re-enter password
            </label>
            <input
              type="password"
              id="repassword"
              name="repassword"
              value={formData.repassword}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Create your Amazon account
          </button>
        </form>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-600 mt-4">
          By creating an account, you agree to Amazon's{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Notice
          </a>.
        </p>
      </div>

      {/* Sign-In Link */}
      <div className="mt-6 text-sm text-gray-600">
        Already have an account?{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Sign in
        </a>
      </div>
    </div>
  );
}
