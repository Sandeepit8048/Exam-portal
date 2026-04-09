import React, { useState } from "react";

function Login() {

  const [logindata, setLogindata] = useState({
    user: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setLogindata({
      ...logindata,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://exam-portal-q6qe.onrender.com/exampost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(logindata),
        }
      );

      console.log(await response.json());

      // Reset form
      setLogindata({
        user: "",
        password: "",
      });

    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-r from-red-100 to-yellow-100 px-4">

      {/* Login Card */}

      <div className="
      bg-white shadow-lg rounded-lg p-6 w-full max-w-sm
      ">

        <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 text-gray-800">
          Create-Account
        </h2>

        {/* Form */}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Username */}

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>

            <input
              type="text"
              name="user"
              placeholder="Enter username"
              onChange={handleChange}
              value={logindata.user}
              className="w-full px-3 py-2 border rounded 
              focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password */}

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="******"
              onChange={handleChange}
              value={logindata.password}
              className="w-full px-3 py-2 border rounded 
              focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 
            rounded font-semibold hover:bg-blue-700 transition"
          >
            Create-Account
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;