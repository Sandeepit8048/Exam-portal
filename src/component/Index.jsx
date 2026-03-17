import React from 'react'
import IMG from '../assets/ans.jpeg'

function Index() {
  return (
    <>
      <div className="flex sm:w-full sm:h-screen bg-gradient-to-r from-blue-700 to-white-300 ">

        {/* Left Side Blue */}
        <div className="w-1/2 flex items-center justify-center bg-blue-200">
          <div className="text-left space-y-6 shadow-lg p-8 rounded-lg bg-white">
            <h1 className="text-6xl font-semibold">
              Simply Powerful
            </h1>

            <h1 className="text-4xl font-semibold">
              Online Exams
            </h1>

            <h1 className="font-bold text-lg">
              Welcome to the Exam Portal
            </h1>

            <p className="font-bold text-gray-600">
              Please navigate to the Login or Signup page to access your account and take the exam
            </p>
          </div>
        </div>
        

        {/* Right Side White */}
         <div className="w-1/2 flex items-center justify-center bg-white">
          <img src={IMG} alt="Exam Portal" className="rounded-lg"/>
        </div>
          {/* <div className="absolute bottom-10 w-full flex justify-center">
          <button className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg 
          hover:bg-green-500 hover:scale-110 transition duration-300  text-xl ">
            Create Account 
          </button> 
        </div> */}
           
      </div>
    </>
  )
}

export default Index