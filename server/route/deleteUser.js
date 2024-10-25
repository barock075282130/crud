const router = require("express").Router()
const { Connected } = require("../utils/db")
const User = require("../models/user").User

router.delete("/", async (req, res) => {
    const { userId } = await req.body
    try {
        await Connected()

        await User.findByIdAndDelete(userId)
        return res.status(200).json("delete success")
    } catch (error) {
        return res.status(500).json("db err")
    }
})

module.exports = router
