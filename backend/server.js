require('dotenv').config()

const express = require('express')
const workoutsRouters = require('./routes/workouts')

//express app
const app = express()

//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()

})

//routes
app.use('/api/workouts', workoutsRouters)


//listen for requestss
app.listen(4000, () =>{
    console.log('listening on port ',process.env.PORT)
})

