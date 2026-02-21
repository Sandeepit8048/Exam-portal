import React from 'react'
import IMG from '../assets/ans.jpeg'

function Index() {
  return (
    <>
      <div className="box flex items-center justify-center p-5 gap-5 h-screen ">

        <div className="text-left space-y-4 shadow-lg p-8 rounded-lg space-y-12 bg-white  ">
          <h1 className="text-8xl font-semibold">
            Simply Powerful
          </h1>

          <h1 className="text-5xl font-semibold">
            Online Exams
          </h1>

          <h1 className="font-bold text-lg">
            Welcome to the Exam Portal
          </h1>

          <p className="font-bold text-md text-gray-600 ">
            Please navigate to the Login or Signup page to access your account and take the exam
          </p>
        </div>
    
          <div>
          <img src={IMG} alt="Exam Portal" className="w-auto h-auto rounded-lg "/>
         </div>

      </div>
    </>
  )
}

export default Index