const {Router} = require("express");
const getAll = require("../controllers/getAll");
const postOffer = require("../controllers/postOffer");
const  getOps  = require("../controllers/getOpciones");
const getDetails = require("../controllers/getDetails");
const StatsRouter = require("../routes/StatsRouter");
const putActivate = require("../controllers/putActivate");
const postAvances = require("../controllers/postAvances");



const mainRouter = Router();    

mainRouter.get("/", (req,res) => {
    try {
        res.status(200).send("estamos en OrganiOfertas!!")
    }
    catch(error){
        res.status(400).send(error.message)
    }
    })

mainRouter.post("/oferta", async (req,res) => {
    const offer = req.body;
    console.log("entramos",offer)
    try{
        const result = await postOffer(offer)
        res.status(200).json(result)
    }
    catch(error){
        res.status(400).json(error.message)
    }
})

mainRouter.get("/obtener", async(req,res) => {
    await getAll(req,res)
})

mainRouter.get("/opciones/:opcion", async (req,res) => {


    await getOps(req,res)
})

mainRouter.get("/detalles/:opcion", async (req,res) => {


    await getDetails(req,res)
})

mainRouter.put("/activate/:id",async (req,res) => {
    await putActivate(req,res)
})

mainRouter.use("/stats", StatsRouter)


mainRouter.post("/avances", async (req,res) => {
    await postAvances(req,res)
})


module.exports = mainRouter;