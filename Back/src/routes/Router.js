const {Router} = require("express");
const postOffer = require("../controllers/postOffer");


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

module.exports = mainRouter;