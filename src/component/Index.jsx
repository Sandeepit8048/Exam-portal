import React from "react";
import IMG1 from "../assets/examholle.webp";
import { FaShieldAlt, FaBolt, FaChartLine, FaHeadset } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/Signup");

  }
  function handleCreateAccount() {
    navigate("/Login");
  }
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-10 gap-10">

        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">

          {/* Badge */}
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            Trusted by Thousands of Students
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Simply Powerful
            <span className="text-blue-600"> Online Exams</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg">
            Welcome to the Exam Portal. Login or create your account to access
            exams and track your performance easily.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300" onClick={handleLogin}>
              Login to Account →
              User

            </button>

            <button className="bg-white border border-gray-300 px-6 py-3 rounded-lg shadow-sm hover:bg-gray-100 transition duration-300" onClick={handleCreateAccount}>
              Create Account
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src={IMG1}
            alt="Exam Portal"
            className="rounded-2xl shadow-xl w-full h-full object-cover"
          />
        </div>

      </div>

      {/* Features Section */}
      <div className="px-6 md:px-12 pb-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <FaShieldAlt className="text-blue-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg">
              Secure & Reliable
            </h3>
            <p className="text-gray-600 text-sm">
              Advanced security ensures fair examinations.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <FaBolt className="text-green-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg">
              Fast & Efficient
            </h3>
            <p className="text-gray-600 text-sm">
              Smooth performance with instant results.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <FaChartLine className="text-purple-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg">
              Smart Analytics
            </h3>
            <p className="text-gray-600 text-sm">
              Track performance with detailed insights.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <FaHeadset className="text-yellow-500 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg">
              24/7 Support
            </h3>
            <p className="text-gray-600 text-sm">
              Assistance anytime you need help.
            </p>
          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-white border-t text-gray-600">
        © 2026 Exam Portal. All rights reserved.
      </footer>

    </div>
  );
}

export default Index;