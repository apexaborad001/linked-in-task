const mongoose= require("mongoose")
const coordinatorSchema= mongoose.Schema({
    statustype:String,
    mappedCoordinator:String,
    mappedTo:String,
    agent:String,
    DateCreated:String,

})

module.exports= mongoose.model("coordinator",coordinatorSchema)