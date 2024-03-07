const mongoose = require("mongoose")
const OrganizationUpdate = mongoose.Schema({
    organizationname:String,
    websitelink:String,
    organizationaddress:String,
    organizationcountry:String,
    
})

module.exports= mongoose.model("organization",OrganizationUpdate)