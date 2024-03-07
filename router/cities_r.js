const express = require("express")
const mongoose= require("mongoose")
const cities = require("../model/cities")
const router = express.Router()
const Cities = require("../model/cities")
const State = require("../model/state")

// router.get("/getallcity/:id",async(req,res)=>{
//     try{
//         // const s = await State.findById(req.params.id)
//         const data = await cities.find({state_id:req.params.id})
//         res.send(data)
//     }catch(e){
//         res.send(e)
//         console.log(e)
//     }
// })

router.get("/getallcity/:state_name",async(req,res)=>{
    try{
        const sname = await State.find({state_name:req.params.state_name})
        //const sid = await State.find({_id:sname})
        //const data=sname[0]._id
        const city = await cities.find({state_id:sname[0]._id})
        res.send(city)

    }catch(e){
        res.send(e)
        console.log(e)
    }
})
module.exports=router