const mongoose=require("mongoose")
const AccessKeys=mongoose.Schema({
    agentid:String,
    accesskey:String,
    whiteListedDomain:String
})
module.exports=mongoose.model("Access Key",AccessKeys)