const mongoose=require("mongoose")
const express= require("express")
const router=express.Router()
const CreateaChannel=require("../model/create_a_channel")

router.get("/infoaboutchannel",async(req,res)=>{
    try{
        const data = await CreateaChannel.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.post("/createachannel",async(req,res)=>{
    try{
        const createchannel= new CreateaChannel({
            selectChannel:{
                registeredPlatform:req.body.selectChannel.registeredPlatform,
                registeredEmail:req.body.selectChannel.registeredEmail,
                position:req.body.selectChannel.position,
                channel:req.body.selectChannel.channel
            },
            configureConnection:{
                appName:req.body.configureConnection.appName,
                whatsappBusinessApiKey:req.body.configureConnection.whatsappBusinessApiKey,
                platformToBeConnected:req.body.configureConnection.platformToBeConnected,
                agenttoBeConnected:req.body.configureConnection.agenttoBeConnected
            }
        })

        const data = await createchannel.save()
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

module.exports= router