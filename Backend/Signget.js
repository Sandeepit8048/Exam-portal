import mongoose from "mongoose";
import connectDB from "./mongoDB/Mongoconnect.js";
import Express from "express";
import cors from "cors";
import login from "./module/Login.js";

connectDB();

const app = Express();
app.use(cors());
app.use(Express.json());
app.use("/exam", Express.Router());

app.get('/exam', async (req, res) => {
    try {
        const data = await login.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})