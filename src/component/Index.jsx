import React from 'react'
import Nav from './Nav';
import IMG from '../assets/File-Pages.jpg'
function Index() {
  return (
   <>
     <div className="box justify-items-center  " >
      <h1>Welcome to the Exam Portal</h1>
      <div className='flex  space-x-6 '><p>Please navigate to the Login or Signup page to access your account and take the exam</p>
      <img src={IMG} alt="Exam Portal" className="w-80 h-90 mt-4 rounded-lg shadow-md" /></div>
      <h4>Simply Powerful </h4>
       <h1>Online Exams</h1>

     </div>
   </>
  )
}

export default Index