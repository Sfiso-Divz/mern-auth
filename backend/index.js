require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoute')

// app
const app = express()

// middleware
app.use(express.json())
app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
})

// connecting to DB
mongoose.connect(process.env.MONGO_URI,)
.then(() =>{
    app.listen(process.env.PORT, () => {
        console.log('Listening to port 4000 and connected to db')
    })
})
.catch(err => console.log(err))

//Routes
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)