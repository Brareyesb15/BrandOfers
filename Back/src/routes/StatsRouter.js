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
const getIdioma2 = require("../controllers/getIdioma2");



const StatsRouter = Router()

StatsRouter.get("/tecs/:id", async(req,res) => { 
    await getTecs(req,res)
})

StatsRouter.get("/paises/:id", async(req,res) => {
    await getPaises(req,res)
})

StatsRouter.get("/exp/:id", async(req,res) => {
    await getExp(req,res)
})

StatsRouter.get("/post/:id", async(req,res) => {
    await getPost(req,res)
})

StatsRouter.get("/stack/:id", async(req,res) => {
    await getStack(req,res)
})  

StatsRouter.get("/estado/:id", async(req,res) => {
    await getEstado(req,res)
})  

StatsRouter.get("/idioma/:id", async(req,res) => {
    await getIdioma(req,res)
})  

StatsRouter.get("/idioma2/:id", async(req,res) => {
    await getIdioma2(req,res)
})  

StatsRouter.get("/plataformas/:id", async(req,res) => {
    await getPlats(req,res)
})  

StatsRouter.get("/fechas/:id", async(req,res) => {
    await getFechas(req,res)
})  


module.exports = StatsRouter