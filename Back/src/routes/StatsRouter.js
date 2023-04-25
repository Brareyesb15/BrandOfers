const {Router} = require("express");
const getTecs = require("../controllers/getTecs");
const getPaises = require("../controllers/getPaises");
const getExp = require("../controllers/getExp");
const getPost = require("../controllers/getPost");
const getStack = require("../controllers/getStack");



const StatsRouter = Router()

StatsRouter.get("/tecs", async(req,res) => { 
    await getTecs(req,res)
})

StatsRouter.get("/paises", async(req,res) => {
    await getPaises(req,res)
})

StatsRouter.get("/exp", async(req,res) => {
    await getExp(req,res)
})

StatsRouter.get("/post", async(req,res) => {
    await getPost(req,res)
})

StatsRouter.get("/stack", async(req,res) => {
    await getStack(req,res)
})  


module.exports = StatsRouter