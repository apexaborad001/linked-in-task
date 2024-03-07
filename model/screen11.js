const mongoose = require("mongoose")
const membersList = mongoose.Schema({
    username:String,
    emailid:String,
    platform:String,
    role:String,
    
})

module.exports= mongoose.model("memberlist",membersList)