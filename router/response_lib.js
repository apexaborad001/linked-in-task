const express= require("express")
const router = express.Router()
const responseLib = require("../model/respone_lib")
const mongoose = require("mongoose")

router.get("/getallresponselib",async(req,res)=>{
    try{
        const data = await responseLib.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.post("/createresponselib",async(req,res)=>{
    const entities = new responseLib({
        intent :req.body.intent,
        intentType:req.body.intentType,
        agent:req.body.agent,
        dateCreated:req.body.dateCreated,
        addGlobalResponse:req.body.addGlobalResponse,
        addCondition:req.body.addCondition,
        responseType:req.body.responseType,
        description:req.body.description
    })
    try{
        const data = await entities.save()
        res.send(data)
    }catch(e){
        res.send(e)
    }
})


router.patch("/updateresponselib/:id",async(req,res)=>{
    const updates= Object.keys(req.body)
    try{
        const data = await responseLib.findById(req.params.id)
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
        const data = await responseLib.findByIdAndDelete(req.params.id)
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

module.exports=router