const mongoose = require("mongoose")
const Help = mongoose.Schema({
    question:String,
    ans:String 
})

module.exports= mongoose.model("help",Help)