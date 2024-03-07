const mongoose= require("mongoose")
const stateSchema = mongoose.Schema({
    repository:Array,
    country_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"country"
    },
    state_name:String,
    createdAt:Date,
    updatedAt:Date
})
module.exports= mongoose.model("states",stateSchema)
