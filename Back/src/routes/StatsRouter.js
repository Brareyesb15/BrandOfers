const {Router} = require("express");
const getTecs = require("../controllers/getTecs");

const StatsRouter = Router()

StatsRouter.get("/tecs", async(req,res) => { 
    await getTecs(req,res)
})

module.exports = StatsRouter