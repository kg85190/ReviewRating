const express = require('express')
const { userModel } = require('../Model/userModel')
const { registration, login } = require('../Controller/userController')
let userRoutes = express.Router()

userRoutes.get('/', (req,res) =>{
    res.send("userRoutes")
  })

  userRoutes.post('/userRegister', registration)
  userRoutes.post('/login', login)

module.exports = {userRoutes}