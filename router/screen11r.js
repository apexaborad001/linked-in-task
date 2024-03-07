const express = require("express")
const mongoose= require("mongoose")
const router = express.Router()
const Member = require("../model/screen11")

router.get("/getallmemeber",async(req,res)=>{
    try{
        const data = await Member.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})


router.post("/createmember",async(req,res)=>{
    const member = new Member({
        username:req.body.username,
        emailid:req.body.emailid,
        platform:req.body.platform,
        role:req.body.role
    })
    try{
        const data = await member.save()
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.patch("/editmemberlist/:id",async(req,res)=>{
    const updates=Object.keys(req.body)
    try{
        const data = await Member.findById(req.params.id)
        updates.forEach((update)=>{
            data[update]=req.body[update]
        })
        const final = await data.save()
        res.send(final)
    }
    catch(e){
        res.send(e)
    }
})

module.exports=router