import React from 'react'
import IMG1 from '../assets/examholle.webp'

function Index() {
  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col md:flex-row bg-gradient-to-r from-blue-700 to-blue-400">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-blue-200 p-6 md:p-10">
        <div className="text-center md:text-left space-y-4 shadow-lg p-6 md:p-8 rounded-lg bg-white max-w-lg">
          <h1 className="text-3xl md:text-6xl font-semibold">
            Simply Powerful
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold">
            Online Exams
          </h2>

          <h3 className="font-bold text-base md:text-lg">
            Welcome to the Exam Portal
          </h3>

          <p className="font-medium text-gray-600 text-sm md:text-base">
            Please navigate to the Login or Signup page to access your account
            and take the exam.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen overflow-hidden">
        <img
          src={IMG1}
          alt="Exam Portal"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Index;