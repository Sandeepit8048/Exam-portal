import React from 'react'
import IMG from '../assets/File-Pages.jpg'

function Index() {
  return (
    <>
      <div className="box flex items-center justify-center gap-50 p-10  ">

        <div className="text-left space-y-4 shadow-md p-10 rounded-lg space-y-15 ">
          <h1 className="text-8xl font-semibold">
            Simply Powerful
          </h1>

          <h1 className="text-5xl font-semibold">
            Online Exams
          </h1>

          <h1 className="font-bold text-lg">
            Welcome to the Exam Portal
          </h1>

          <p className="font-bold text-md">
            Please navigate to the Login or Signup page to access your account and take the exam
          </p>


        </div>
          <div>
          <img
            src={IMG}
            alt="Exam Portal"
            className="w-100 h-100 rounded-lg "
          />
        </div>

      </div>
    </>
  )
}

export default Index