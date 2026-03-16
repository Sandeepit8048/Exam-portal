import Express from 'express'
import connectDB from './mongoDB/Mongoconnect.js'
import userdata from './module/Login.js'

const app = Express();
connectDB()

const fetchdata = async ()=>{
   await userdata.create({
       user:"sandeep",
       password:'xyz'
    })
}

fetchdata()



app.listen(2000, ()=>{
    console.log("server run 2000 port number")
})