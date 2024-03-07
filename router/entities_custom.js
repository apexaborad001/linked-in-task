const express= require("express")
const router = express.Router()
const EntitiesCustom = require("../model/entites_global")
const mongoose = require("mongoose")

router.get("/getallentities_c",async(req,res)=>{
    try{
        const data = await EntitiesCustom.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.post("/createentities_c",async(req,res)=>{
    const entities = new EntitiesCustom({
        entity :req.body.entity,
        entityType:req.body.entityType,
        agent:req.body.agent,
        dateCreated:req.body.dateCreated,
        
    })
    try{
        const data = await entities.save()
        res.send(data)
    }catch(e){
        res.send(e)
    }
})


router.patch("/updateEntities/:id",async(req,res)=>{
    const updates= Object.keys(req.body)
    try{
        const data = await EntitiesCustom.findById(req.params.id)
        updates.forEach((update)=>{
             data[update]= req.body[update]
       })
        // console.log(updates);
        const final = await data.save()
        // console.log(final);
        res.send(final)

    }catch(e){
        res.send(e)
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const data = await Subscription.findByIdAndDelete(req.params.id)
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

module.exports=router