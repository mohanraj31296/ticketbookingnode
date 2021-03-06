const express = require('express')
const app = express()
const mongoAtlasConnection = require('./db');
mongoAtlasConnection();
const controllerSignup = require('./Contoller/signupcontroller')
const contollerLogin = require("./Contoller/logincontroller")
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use("/ticketsignupparent",controllerSignup)
app.use("/ticketloginparent",contollerLogin)
app.listen(8001)