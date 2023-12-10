require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()


mongoose.connect(process.env.MONGO_URI,)
.then(() =>{
    app.listen(process.env.PORT, () => {
        console.log('Listening to port 4000 and connected to db')
    })
})
.catch(err => console.log(err))

