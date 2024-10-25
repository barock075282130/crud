const app = require("express")()

const chkHost = async(req,res,next) => {
    const host = req.hostname
    console.log(host)
}

module.exports = chkHost