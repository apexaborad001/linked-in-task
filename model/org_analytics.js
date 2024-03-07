const mongoose= require("mongoose")
const orgAnalyticsSchema =mongoose.Schema({
    aboutOrganization:{
        img:String,
        platformServices:Number,
        lastUpdated:String
    },
    orginfo:{
        totalAgent:Number,
        totalUsageHours:Number,
        totalCreditsOffers:Number,
        subscriptionPlan:String
    },
    graph:{
        sunday:Number,
        monday:Number,
        tuesday:Number,
        wednesday:Number,
        thursday:Number,
        friday:Number,
        saturday:Number
    }
})

module.exports= mongoose.model("org_analytics",orgAnalyticsSchema)