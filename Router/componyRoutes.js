const express = require('express');
const { createCompony,componyList } = require('../Controller/componyController');
const componyRoutes = express.Router();

componyRoutes.post("/",createCompony)
componyRoutes.get("/componyList",componyList)


module.exports = {componyRoutes}