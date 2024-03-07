const mongoose = require("mongoose")
const UserActivity = mongoose.Schema({
    username:String,
    description:String,
    platform:String,
    dateandtime:String,
    
})

module.exports= mongoose.model("UserActivity",UserActivity)