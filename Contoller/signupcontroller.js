const express = require('express')
const router = express.Router()
const SignupModel = require("../Models/Signupschema")

//http://localhost:8080/ticketsignupparent/ticketsignup
router.post("/ticketsignup",async function(req,res){
    let{name,email,mobilenumber,password} = req.body
    console.log (name,email,mobilenumber,password)
    try{
    let SignupsendtorouteInstance = new SignupModel()
    SignupsendtorouteInstance.name = name
    SignupsendtorouteInstance.email = email
    SignupsendtorouteInstance.mobilenumber = mobilenumber
    SignupsendtorouteInstance.password = password
    console.log(SignupsendtorouteInstance)
    let result = await SignupsendtorouteInstance.save()  
    console.log(result);
    console.log("signup"+ SignupsendtorouteInstance);
    res.send(SignupsendtorouteInstance)
    //return res.json(SignupsendtorouteInstance)
    }
    catch(e){
        console.log(e)
        res.status(400).send('Error');
    }
})

module.exports = router