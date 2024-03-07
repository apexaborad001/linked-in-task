const mongoose= require("mongoose")
const citiesSchema = mongoose.Schema({
    repository:Array,
    state_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"states"
    },
    city_name:String,
    createdAt:Date,
    updatedAt:Date
})
module.exports= mongoose.model("cities",citiesSchema)
