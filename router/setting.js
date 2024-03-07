const express= require("express")
const router = express.Router()
const settings = require("../model/settings_m")
const mongoose = require("mongoose")

router.get("/displaysettings",async(req,res)=>{
    try{
        const data = await settings.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.post("/settings",async(req,res)=>{
    const entities = new settings({
     agentid:req.body.agentid,
    accesskey:req.body.accesskey,
    whiteListedDomain:req.body.whiteListedDomain
    })
    try{
        const data = await entities.save()
        res.send(data)
    }catch(e){
        res.send(e)
    }
})



module.exports=router