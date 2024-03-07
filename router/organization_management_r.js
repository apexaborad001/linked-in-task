const express= require("express")
const router = express.Router()
const OrganizationUpdate= require("../model/organization_management")
const mongoose= require("mongoose")

router.get("/getallinfoaboutorg",async(req,res)=>{
    try{
        const data = await OrganizationUpdate.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.post("/post",async(req,res)=>{
    const organization= new OrganizationUpdate({
        organizationname:req.body.organizationname,
        websitelink:req.body.websitelink,
        organizationaddress:req.body.organizationaddress,
        organizationcountry:req.body.organizationcountry

    })
    try{
        const data = await organization.save()
        res.send(data)
    }catch(e){
        res.send(e)
    }
})

router.patch("/updateorg/:id",async(req,res)=>{
    const updates= Object.keys(req.body)
    try{
        const data = await OrganizationUpdate.findById(req.params.id)
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

module.exports= router
