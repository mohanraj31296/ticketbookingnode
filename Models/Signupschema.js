const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
let signupschema = new mongoose.Schema(
    {
       "name":String,
       "email":String,
       "mobilenumber":Number,
       "password":String
    }
)

// Encryptic the password

signupschema.pre("save",async function(next)
{
   try{
       let controller_Signup = this
       console.log(controller_Signup.password)
       let encrypted = await bcrypt.hash(controller_Signup.password,3)
       controller_Signup.password = encrypted
       next() // To pass the flow to controller
   }
   catch(e)
   {
       console.log(e)
   } 
}
)

signupschema.methods.login = async function (password){
    let user = this
    console.log("Whatisthis"+ this)
    return await bcrypt.compare(password,user.password)
}

let Signupsendtoroute = mongoose.model('SignupCollection', signupschema);

module.exports = Signupsendtoroute