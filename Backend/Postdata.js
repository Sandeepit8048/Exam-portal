import Express from 'express'
import connectDB from './mongoDB/Mongoconnect.js'
import quesdata from './module/Schemadata.js'

connectDB();

const app = Express();

app.use(Express.json())

app.post('/exam', async (req, res) => {
    try {
        const { answer } = req.body;
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



app.listen(3000, () => {
    console.log("Server is run 3000 port number")
})