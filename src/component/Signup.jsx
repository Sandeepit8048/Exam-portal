import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [signupdata, setSignupdata] = useState([]);

  const [store, setStore] = useState({
    user: "",
    password: "",
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);
  
 

  function loadData() {
     const response = JSON.parse(localStorage.getItem("store")) || [];
     setSignupdata(response);

    if (response && response.length > 0) {
      setSignupdata(response);
    } else {
      console.log("No signup data found");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setStore({
      ...store,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const finddata = signupdata.find(
      (item) =>
        item.user === store.user &&
        item.password === store.password
    );

    if (finddata) {
      alert("Login Successful ✅");
      navigate("/Storage");
    } else {
      alert("Wrong Username or Password ❌");
    }

      setStore({
        user: "",
        password: "",
      });
  }

  return (
    <div className="sm:min-h-screen sm:flex sm:flex-col sm:items-center sm:justify-center bg-gradient-to-r from-orange-300 to-pink-300 px-4 ">

      {/* Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">

        <h2 className="sm:text-2xl font-bold text-center mb-4">
         Login-Page
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium">
              Username
            </label>

            <input
              type="text"
              name="user"
              placeholder="Enter username"
              value={store.user} 
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="******"
              onChange={handleChange}
              value={store.password}
              className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-black py-2 rounded font-semibold hover:bg-blue-600 transition"
          >
            Login
          </button>

        </form>
      </div>

      {/* Show Stored Users */}
     

    </div>
  );
}

export default Signup;