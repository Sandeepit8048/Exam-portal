import mongoose from "mongoose";


const addschema = new mongoose.Schema({
   user:String,
   password:String,

})
 
const userdata = mongoose.model("addschema", addschema)

export default userdata;