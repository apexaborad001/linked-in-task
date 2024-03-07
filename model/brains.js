const mongoose= require("mongoose")
const brainsSchema= mongoose.Schema({
    brainsName:String,
    description:String,
    computeUnits:Number
})

module.exports= mongoose.model("Brains ",brainsSchema)