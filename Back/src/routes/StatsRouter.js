const {Router} = require("express");
const getTecs = require("../controllers/getTecs");
const getPaises = require("../controllers/getPaises");
const getExp = require("../controllers/getExp");
const getPost = require("../controllers/getPost");
const getStack = require("../controllers/getStack");
const getEstado = require("../controllers/getEstado");
const getIdioma = require("../controllers/getIdioma");
const getPlats = require("../controllers/getPlats");
const getFechas = require("../controllers/getFechas");


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

StatsRouter.get("/estado", async(req,res) => {
    await getEstado(req,res)
})  

StatsRouter.get("/idioma", async(req,res) => {
    await getIdioma(req,res)
})  

StatsRouter.get("/plataformas", async(req,res) => {
    await getPlats(req,res)
})  

StatsRouter.get("/fechas", async(req,res) => {
    await getFechas(req,res)
})  


module.exports = StatsRouter