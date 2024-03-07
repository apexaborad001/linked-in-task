const express= require("express")
const router= express.Router()
const SettingChange= require("../model/setting")
const mongoose= require("mongoose")

router.get("/showsettinginfo",async(req,res)=>{
    try{
        const data = await SettingChange.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.post("/setting",async(req,res)=>{
    const setting = new SettingChange({
        changelanguage:req.body.changelanguage,
        desktopnotification:req.body.desktopnotification,
        emailnotification:req.body.emailnotification
    })
    try{
        const data = await setting.save()
        res.send(data)
    }catch(e){
        res.send(e)
    }

})

router.patch("/updatesetting/:id",async(req,res)=>{
    const updates= Object.keys(req.body)
    try{
        const data = await SettingChange.findById(req.params.id)
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

module.exports=router

