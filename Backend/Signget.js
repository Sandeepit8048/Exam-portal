import mongoose from "mongoose";
import connectDB from "./mongoDB/Mongoconnect.js";
import Express from "express";
import cors from "cors";
import login from "./module/Login.js";
import quesdata from './module/ques.js'

connectDB();

const app = Express();
app.use(cors());
app.use(Express.json());
app.use("/exam", Express.Router());


app.post('/exampost', async (req, res) => {
    try {
        const {user, password} = req.body;
        const ans = new login({
            user,
            password
        })
        const newAns = await ans.save();
        res.json(newAns);
    }

    catch(error){
        console.log("Error saving data : ", error);
        res.status(500).send("server Error")
    }
}),

app.post ('/answer', async (req, res)=>{
    try{
        const {answer} = req.body;
        const ans = new quesdata({
            answer
        })
        const newAns = await ans.save();
        res.json(newAns);
    }
    catch(error){
        console.log("Error saving data : ", error);
        res.status(500).send("server Error")
    }
})

app.get('/exam', async (req, res) => {
    try {
        const data = await login.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.get('/ques', async(req, res)=>{
    try{
        const data = await quesdata.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
})





app.listen(2000, () => {
    console.log("Server is running on port 2000");
})