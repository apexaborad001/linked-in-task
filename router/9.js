const express = require("express")
const mongoose= require("mongoose")
const router = express.Router()
const Profile = require("../model/screen9")
const multer = require("multer")

// router.get

const upload = multer({
    dest:"avatars"
})

router.get("/all",async(req,res)=>{
    try{
        const data = await Profile.find({})
        res.send(data)
    }catch(e){
        res.send(e)
    }

})

router.post("/profile",upload.single("profile"),async(req,res)=>{
    const profile= new Profile({
        username :req.body.username,
        email:req.body.email,
        company:req.body.company,
        phone:req.body.phone,
        jobtitle:req.body.jobtitle,
        country:req.body.country,
        // profilePicture:req.body.file
    })
    try{
        const data = await profile.save()
        res.send()
    }catch(e){
        res.send(e)
    }
})


router.post("/profileimg",upload.single("profile"),async(req,res)=>{
    const profile= new Profile({
        profilePicture:req.body.profilePicture
    })
    try{
        const data = await profile.save()
        res.send()
    }catch(e){
        res.send(e)
    }
})


module.exports = router