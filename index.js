const express = require('express')
let app = express()
const mongoose = require('mongoose');

const { userRoutes } = require('./Router/userRoute');
const { componyRoutes } = require('./Router/componyRoutes');
PORT = 8000
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/kanha')
  .then(() => console.log('Connected!!!')).catch((err)=>{console.log(err)})

  app.get('/', (req,res) =>{
    res.send("testing")
  })


app.use('/user', userRoutes)
app.use('/compony',componyRoutes)

app.listen(PORT, ()=>{
    console.log(`sever is running at ${PORT}`)
})
