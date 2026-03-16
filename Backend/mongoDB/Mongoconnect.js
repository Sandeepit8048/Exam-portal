import mongoose from "mongoose";
// password - b7bNl9c2nWR5JvNN

const connectDB = async ()=>{

    try{
        await  mongoose.connect('mongodb+srv://rkysandeepyadav_db_user:b7bNl9c2nWR5JvNN@cluster0.vxrahge.mongodb.net/');
        console.log("mongoDB is conntected successfully");

    }catch(error){
        console.log("DataBase is not connected", error)
    }

}

export default connectDB;
