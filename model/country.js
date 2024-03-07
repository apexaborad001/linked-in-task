const mongoose= require("mongoose")
const countrySchema = mongoose.Schema({
    repository:Array,
    file_upload:Array,
    country_name:String,
    createdBy:String,
    updatedBy:String,
    createdAt:Date,
    updatedAt:Date
})
module.exports= mongoose.model("country",countrySchema)
