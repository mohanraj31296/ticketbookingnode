const express = require('express')
const router = express.Router()
const signupSchema = require('../Models/Signupschema')

//http://localhost:8001/ticketloginparent/ticketlogin


router.get('/', (req, res) => {
    res.send("Checking")
   })


router.post("/ticketlogin",async function(req,res){
let{email,password} = req.body
let user = await signupSchema.findOne({"email":email})
console.log(user)
try{
    if(user){
        let isValid = await user.login(password)
        if(isValid)
        {
            res.send("Login Success")
        }
        else{
            res.send("Login Failed")
        }
    }
}
catch(e)
{
console.log(e)
}
})

module.exports = router