const mongoose = require("mongoose")
const profileSchema = mongoose.Schema({
    username:String,
    email:String,
    company:String,
    phone:Number,
    jobtitle:String,
    country:String,
    profilePicture:String
})

module.exports= mongoose.model("profileinfo",profileSchema)