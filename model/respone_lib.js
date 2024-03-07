const mongoose= require("mongoose")
const EntitiesResponseLibSchema = mongoose.Schema({
    intent:String,
    intentType:String,
    agent:String,
    dateCreated:String,
    addGlobalResponse:Boolean,
    addCondition:Boolean,
    responseType:String,
    description:String
})
module.exports= mongoose.model("response lib",EntitiesResponseLibSchema)
