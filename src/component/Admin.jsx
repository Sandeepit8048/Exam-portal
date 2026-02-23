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

    //  function handleSubmit(){
    //         navigate("/AdmitCard");
    //  }

     

  return (
    <div className=' sm:flex sm:flex-col sm:items-center sm:justify-center mt-10 p-4 gap-6'>
        <h1 className='text-3xl font-bold  '>Admin</h1>
         <form action="" onSubmit={handleSubmit} className='flex sm:flex-col justify-center items-center text-center  gap-4 w-70 h-auto bg-gray-200 p-4 rounded-md shadow-lg' > 
            <label htmlFor="" className='font-bold text-xl '>User-name</label>
            <input type="text" name="user" id="" onChange={(e) => setAdmindata({...admindata, user:e.target.value})} className='bg-white' />
            <label htmlFor="" className='font-bold text-xl' >Password</label>
            <input type="password" name="password" id="" onChange={(e) => setAdmindata({...admindata, password:e.target.value})} className='bg-white' />
            <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-md'>Login</button>
         </form>
    </div>
  )
}

export default Admin