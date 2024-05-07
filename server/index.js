const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const dotenv = require ('dotenv')
const cors = require('cors')
const { route } = require('./routes/userRoute')


const app =express()
app.use(bodyparser.json())
app.use(cors())
dotenv.config()

const port = process.env.port || 8000
const URL  = process.env.MONGODB_URL

mongoose.connect(URL)
.then(()=>{
    console.log("DB connected")
    app.listen(port, ()=>{
        console.log(`port is runnning in ${port}`)
    })
})
.catch(error=>console.log(error))

app.use("/api",route)