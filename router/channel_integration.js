const mongoose= require("mongoose")
const express=require("express")
const router= express.Router()
const ChannelIntegration= require("../model/channel_integration")



router.get("/channelintegration",async(req,res)=>{
    try{
        const data = await ChannelIntegration.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.post("/selectachannel",async(req,res)=>{
    try{
        const channel_integration= new ChannelIntegration({
            channels:req.body.channels,
            details:req.body.details,
            configure:req.body.configure
        })

        const data = await channel_integration.save()
        res.send(data)

    }catch(e){
        res.send(e)
    }

})

module.exports= router