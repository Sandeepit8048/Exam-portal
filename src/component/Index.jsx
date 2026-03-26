import React from 'react'
import IMG from '../assets/ans.jpeg'

function Index() {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full min-h-screen bg-gradient-to-r from-blue-700 to-white">

        {/* Left Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-blue-200 p-6">
          <div className="text-center md:text-left space-y-4 shadow-lg p-6 md:p-8 rounded-lg bg-white max-w-lg">

            <h1 className="text-3xl md:text-6xl font-semibold">
              Simply Powerful
            </h1>

            <h1 className="text-2xl md:text-4xl font-semibold">
              Online Exams
            </h1>

            <h1 className="font-bold text-base md:text-lg">
              Welcome to the Exam Portal
            </h1>

            <p className="font-medium text-gray-600 text-sm md:text-base">
              Please navigate to the Login or Signup page to access your account and take the exam
            </p>

          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6">
          <img
            src={IMG}
            alt="Exam Portal"
            className="rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
          />
        </div>

      </div>
    </>
  )
}

export default Index