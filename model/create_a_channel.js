const mongoose= require("mongoose")
const CreateachannelSchema=  new mongoose.Schema({
    selectChannel:{
        registeredPlatform:String,
        registeredEmail:String,
        position:String,
        channel:String
    },
    configureConnection:{
        appName:String,
        whatsappBusinessApiKey:String,
        platformToBeConnected:String,
        agenttoBeConnected:String
    }
})

module.exports=mongoose.model("create a channel",CreateachannelSchema)