import mongoose from "mongoose";

const  answersheet = new mongoose.Schema({
     question:String,
     answer:String,
      user:String,
})

const Resultcard= mongoose.model("answersheet", answersheet)

export default Resultcard;