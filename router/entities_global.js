const express= require("express")
const router = express.Router()
const EntitiesGlobal = require("../model/entites_global")
const mongoose = require("mongoose")

router.get("/getallentities",async(req,res)=>{
    try{
        const data = await EntitiesGlobal.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.post("/createentities",async(req,res)=>{
    const entities = new EntitiesGlobal({
        entity :req.body.entity,
        entityType:req.body.entityType,
        agent:req.body.agent,
        dateCreated:req.body.dateCreated
    })
    try{
        const data = await entities.save()
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

module.exports=router