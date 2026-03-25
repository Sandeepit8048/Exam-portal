import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

function Admin() {
    const navigate = useNavigate();
      
    
    const [admindata, setAdmindata] = useState({
        user:"",
        password:""
    });

    
    function handleSubmit(e){
        e.preventDefault();
        if(admindata.user === "admin" && admindata.password === "admin123"){
            alert("Login Successful ✅");
            navigate("/AdmitCard");
        }
        else{
            alert("Wrong Username or Password ❌");
        }
    }


    return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 px-4">
    
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
      
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Admin Login
      </h1>

      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-5"
      >

        {/* Username */}
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            onChange={(e) =>
              setAdmindata({ ...admindata, user: e.target.value })
            }
            placeholder="Enter username"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            onChange={(e) =>
              setAdmindata({ ...admindata, password: e.target.value })
            }
            placeholder="Enter password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Login
        </button>

      </form>
    </div>
  </div>
);
}

export default Admin