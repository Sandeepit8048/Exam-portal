import mongoose from "mongoose";

const qusdata = new mongoose.Schema({
            question:String,
            option:String,
            answer:String
})

const quesdata = mongoose.model("quesdata", qusdata)

export default quesdata;