import React from 'react'
import IMG from '../assets/ans.jpeg'
function Index() {
  return (
    <>
      <div className="box sm:flex sm:items-center sm:justify-center sm:p-5 gap-5  sm:w-full sm:h-screen bg-gradient-to-r from-white-500 to-blue-800  ">

        <div className="text-left space-y-4 shadow-lg p-8 rounded-lg space-y-12 bg-white   ">
          <h1 className="sm:text-8xl font-semibold">
            Simply Powerful
          </h1>

          <h1 className="sm:text-5xl font-semibold">
            Online Exams
          </h1>

          <h1 className="font-bold sm:text-lg">
            Welcome to the Exam Portal
          </h1>

          <p className="font-bold text-md text-gray-600 ">
            Please navigate to the Login or Signup page to access your account and take the exam
          </p>
        </div>
    
          <div>
          <img src={IMG} alt="Exam Portal" className="w-auto h-auto sm:rounded-lg  "/>
         </div>

      </div>
    </>
  )
}

export default Index