import Express from 'express'
import connectDB from './mongoDB/Mongoconnect.js'
import quesdata from './module/Schemadata.js'


connectDB();

const app = Express();

const fetchschema = async ()=>{
      await quesdata.create({
        question:"What is JavaScript",
        option:"Script language"
      })
}
fetchschema()


app.listen(1000, ()=>{
    console.log("server run the code port number 1000")
})

