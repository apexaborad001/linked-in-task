const express = require("express")
const router= express.Router()
const UserActivity = require("../model/useractivity")
const mongoose=require("mongoose")

router.get("/getalluseractivity",async(req,res)=>{
    try{
        const data = await UserActivity.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.post("/useractivity",async(req,res)=>{
    const useractivity= new UserActivity({
        username:req.body.username,
        description:req.body.description,
        platform:req.body.platform,
        dateandtime:req.body.dateandtime
    })
    try{
        const data = await useractivity.save()
        res.send(data)
    }catch(e){
        res.send(e)
    }
})
module.exports=router