import Express from 'express'
import connectDB from './mongoDB/Mongoconnect.js'
// import quesdata from './module/Schemadata.js'
import login from './module/Login.js'
import cors from 'cors';

connectDB();

const app = Express();
app.use(cors());

app.use(Express.json())

app.use("/exam", Express.Router());


app.post('/exam', async (req, res) => {
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
})



app.listen(3000, () => {
    console.log("Server is run 3000 port number")
})