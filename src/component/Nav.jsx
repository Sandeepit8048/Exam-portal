import React, { useState } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Exam from './Exam';
import AdmitCard from './AdmitCard'
import Index from './Index';
import Storage from './Storage';
import Admin from './Admin';
import Ques from './Ques';

function Nav() {

  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'block p-2 text-red-600 border-b-2 border-red-600'
      : 'block p-2';

  return (
    <>
      {/* Navbar */}
      <nav className='w-full bg-gradient-to-r from-yellow-300 to-green-400 text-lg font-semibold shadow fixed top-0 left-0 z-[999]'>

        <div className='flex justify-between items-center h-16 px-4'>

          {/* Logo */}
          <h1 className='font-bold text-xl'>Exam Portal</h1>

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-5'>
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/Login" className={navLinkClass}>Create-Account</NavLink>
            <NavLink to="/Signup" className={navLinkClass}>Login</NavLink>
            <NavLink to="/Admin" className={navLinkClass}>Admin</NavLink>
          </div>

          {/* Hamburger */}
          <div className='md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
            {open ? "✖" : "☰"}
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className='md:hidden flex flex-col items-center bg-white shadow'>
            <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/Login" className={navLinkClass} onClick={() => setOpen(false)}>Create-Account</NavLink>
            <NavLink to="/Signup" className={navLinkClass} onClick={() => setOpen(false)}>Login</NavLink>
            <NavLink to="/Admin" className={navLinkClass} onClick={() => setOpen(false)}>Admin</NavLink>
          </div>
        )}

      </nav>

      {/* Page Content */}
      <div className='mt-16'>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/AdmitCard" element={<AdmitCard />} />
          <Route path="/Exam" element={<Exam />} />
          <Route path="/Storage" element={<Storage />} />
           <Route path="/Ques" element={<Ques />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </div>
    </>
  )
}

export default Nav;