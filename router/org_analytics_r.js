const express= require("express")
const mongoose= require("mongoose")
const router = express.Router()
const AnalyticsDashboard= require("../model/org_analytics")
// const format = require("date-fns/format");

router.get("/getorganalytics",async(req,res)=>{
    try{
        const data = await AnalyticsDashboard.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

// const today = format(new Date(), "yyyy-M-dd");


router.post("/postorganalytics",async(req,res)=>{
    const organalytics = new AnalyticsDashboard({
        aboutOrganization:{
            img:req.body.aboutOrganization.img,
            platformServices:req.body.aboutOrganization.platformServices,
            lastUpdated:req.body.aboutOrganization.lastUpdated
        },
        orginfo:{
            totalAgent:req.body.orginfo.totalAgent,
            totalUsageHours:req.body.orginfo.totalUsageHours,
            totalCreditsOffers:req.body.orginfo.totalCreditsOffers,
            subscriptionPlan:req.body.orginfo.subscriptionPlan
        },
        graph:{
            sunday:req.body.graph.sunday,
            monday:req.body.graph.monday,
            tuesday:req.body.graph.tuesday,
            wednesday:req.body.graph.wednesday,
            thursday:req.body.graph.thursday,
            friday:req.body.graph.friday,
            saturday:req.body.graph.saturday
        }
    })
    try{
        const data = await organalytics.save()
        console.log(data)
        res.send(data)

    }catch(e){
        res.send(e)
    }
})

module.exports= router