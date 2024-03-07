const express = require("express")
const router = express.Router()
const AccessKeys = require("../model/access_keys")
const mongoose = require("mongoose")

router.get("/getallaccesskey", async (req, res) => {
    try {
        const data = await AccessKeys.find({})
        res.send(data)
    } catch (e) {
        res.send(e)
    }
})

router.post("/createaccesskey", async (req, res) => {
    const entities = new AccessKeys({
        agentid: req.body.agentid,
        accesskey: req.body.accesskey,
        whiteListedDomain: req.body.whiteListedDomain
    })
    try {
        const data = await entities.save()
        res.send(data)
    } catch (e) {
        res.send(e)
    }
})



module.exports = router