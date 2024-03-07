const mongoose= require("mongoose")
const EntitiesCustomSchema = mongoose.Schema({
    entity:String,
    entityType:String,
    agent:String,
    dateCreated:String,
})
module.exports= mongoose.model("Entities Custom",EntitiesCustomSchema)
