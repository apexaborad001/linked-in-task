const mongoose=require("mongoose")
const settingSchemas=mongoose.model({
    name:String,
    Description:String,
    team:String,
    img:String
})