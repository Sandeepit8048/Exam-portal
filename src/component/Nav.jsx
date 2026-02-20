import React from 'react'
import {Link,   Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './signup';
import Exam from './Exam';
import AdmitCard from './AdmitCard'


function Nav() {
  return (
    <>
  

     <nav className='flex gap-5 justify-center items-center h-16 bg-gray-300 text-lg font-semibold  '>
      <Link to="/Login" className='p-2'>Login</Link>
      <Link to="/Signup" className='p-2'>Signup</Link>
      <Link to="/AdmitCard" className='p-2'>AdmitCard</Link>
      <Link to="/Exam" className='p-2'>Exam</Link>
      </nav>





         <Routes>
          <Route path='/' element={<h1>Home Page</h1>}/>
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={ <Signup/> } />
            <Route path="/AdmitCard" element={<AdmitCard />} />
            <Route path="/Exam" element={<Exam/>} />
         </Routes>
       
     
    </>
  )
}

export default Nav