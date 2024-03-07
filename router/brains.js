const express= require("express")
const router = express.Router()
const Brains = require("../model/brains")
const mongoose = require("mongoose")

router.get("/getallbrains",async(req,res)=>{
    try{
        const data = await Brains.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.post("/createbrains",async(req,res)=>{
    const entities = new Brains({
        brainsName:req.body.brainsName,
        description:req.body.description,
        computeUnits:req.body.computeUnits
    })
    try{
        const data = await entities.save()
        res.send(data)
    }catch(e){
        res.send(e)
    }
})


router.patch("/updatebrains/:id",async(req,res)=>{
    const updates= Object.keys(req.body)
    try{
        const data = await Brains.findById(req.params.id)
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
        const data = await Brains.findByIdAndDelete(req.params.id)
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

module.exports=router