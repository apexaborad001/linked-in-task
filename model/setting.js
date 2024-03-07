// const { List } = require("actions-on-google")
const mongoose = require("mongoose")
const settingSchema = mongoose.Schema({
    changelanguage:String,
    desktopnotification:Boolean,
    emailnotification:Boolean
})

module.exports= mongoose.model("setting",settingSchema)

