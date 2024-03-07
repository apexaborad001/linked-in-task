const express= require("express")
const router = express.Router()
const Coordinator = require("../model/coordinator")
const mongoose = require("mongoose")

router.get("/getallcoordinator",async(req,res)=>{
    try{
        const data = await Coordinator.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.post("/createcordinator",async(req,res)=>{
    const entities = new Coordinator({
        statustype:req.body.statustype,
        mappedCoordinator:req.body.mappedCoordinator,
        mappedTo:req.body.mappedTo,
        agent:req.body.agent,
        DateCreated:req.body.DateCreated,
    })
    try{
        const data = await entities.save()
        res.send(data)
    }catch(e){
        res.send(e)
    }
})


router.patch("/updatecordinator/:id",async(req,res)=>{
    const updates= Object.keys(req.body)
    try{
        const data = await Coordinator.findById(req.params.id)
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
        const data = await Coordinator.findByIdAndDelete(req.params.id)
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

module.exports=router