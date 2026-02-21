import React from 'react'
import {Link,   Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Exam from './Exam';
import AdmitCard from './AdmitCard'
import Index from './Index';


function Nav() {
  return (
    <>

     <nav className='flex gap-5 justify-center items-center h-16 bg-gray-300 text-lg font-semibold  '>
      <Link to="/" className='p-2'>Home</Link>
      <Link to="/Login" className='p-2'>Create-Account</Link>
      <Link to="/Signup" className='p-2'>Login</Link>
      </nav>


         <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={ <Signup/> } />
            <Route path="/AdmitCard" element={<AdmitCard />} />
            <Route path="/Exam" element={<Exam/>} />
         </Routes>
       
     
    </>
  )
}

export default Nav