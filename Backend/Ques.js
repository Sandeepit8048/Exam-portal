import Express from 'express'
import connectDB from './mongoDB/Mongoconnect.js'
import quesdata from './module/ques.js'



connectDB();

const app = Express();

const fetchschema =  async ()=>{
      await quesdata.create({
        question:"Which method is used to add an element at the end of an array?",
        option:"a) push()  b) pop()  c) shift()  d) unshift()"
      },{
        question:"What is the output of console.log(typeof NaN)?",
        option:"a) number  b) string  c) undefined  d) object"
      },
      {
        question:"Which of the following is not a JavaScript data type?",
        option:"a) string  b) number  c) boolean  d) character" },
      { 
        question:"What is the difference between var, let, and const in JavaScript?",
        option:"a) var is function-scoped, let and const are block-scoped  b) var and let are function-scoped, const is block-scoped  c) var and const are function-scoped, let is block-scoped  d) All are function-scoped"
      },
      {
        question:"What are closures in JavaScript?",
        option:"a) A closure is a function that has access to its own scope, the scope of the outer function, and the global scope  b) A closure is a function that can only access its own scope  c) A closure is a function that can only access the global scope  d) A closure is a function that can only access the scope of the outer function"
       
      },{
        question: "Which method converts JSON to object?",
        option:"a) JSON.parse()  b) JSON.stringify()  c) JSON.toObject()  d) JSON.convert()"
      }
    )
}

fetchschema();



app.listen(1000, ()=>{
    console.log("server run the code port number 1000")
})

