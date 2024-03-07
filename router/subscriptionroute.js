const express=require("express")
const router = express.Router()
const Subscription = require("../model/subscription") 
const mongoose =require("mongoose")
// const Product= require("../../stock_table/routers/router")

router.get("/",async(req,res)=>{
    try{
        const data = await Subscription.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})


router.post("/",async(req,res)=>{
    const subscription= new Subscription({
        subscription:req.body.subscription,
        planDetail:req.body.planDetail,
        lastPaidDate:req.body.lastPaidDate,
        nextDueDate:req.body.nextDueDate,
        activeSubscriber:req.body.activeSubscriber

    })
    try{
        const data= await subscription.save()
        res.send(data)
    }catch{[
        res.send(e)
    ]}
})

router.patch("/:id",async(req,res)=>{
    const updates = Object.keys(req.body)
    
    try{
        const data = await Subscription.findById(req.params.id) 
        updates.forEach((update)=>{
            data[update]=req.body[update]
        })
        
        const final = await data.save()
        res.json(final)
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

module.exports = router;