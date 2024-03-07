const express= require("express")
const router = express.Router()
const Helpsetting = require("../model/help")
const mongoose = require("mongoose")

router.get("/getallhelpinfo",async(req,res)=>{
    try{
        const data = await Helpsetting.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.post("/postanyquery",async(req,res)=>{
    const help = new Helpsetting({
        question :req.body.question,
        ans:req.body.ans
    })
    try{
        const data = await help.save()
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

module.exports=router