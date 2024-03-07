const mongoose= require("mongoose")
const ChannelIntegration= mongoose.Schema({
    channels:String,
    details:String,
    configure:Boolean
})

module.exports= mongoose.model("channel integration",ChannelIntegration)