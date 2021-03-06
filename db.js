const mongoose = require('mongoose')
const dbURL = "mongodb+srv://mohanraj31296:mohanraj31296@cluster0.nh7ga.mongodb.net/crampete?retryWrites=true&w=majority"

function mongoAtlasConnection(){
mongoose.connect(dbURL,{useNewUrlParser : true,useUnifiedTopology:true})
}

module.exports = mongoAtlasConnection