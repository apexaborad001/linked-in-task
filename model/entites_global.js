const mongoose= require("mongoose")
const EntitiesGlobalSchema = mongoose.Schema({
    entity:String,
    entityType:String,
    agent:String,
    dateCreated:String,
})
module.exports= mongoose.model("Entities Global",EntitiesGlobalSchema)
