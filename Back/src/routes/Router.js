const {Router} = require("express");

const mainRouter = Router();    

mainRouter.get("/", (req,res) => {
    try {
        res.status(200).send("estamos en OrganiOfertas!!")
    }
    catch(error){
        res.status(400).send(error.message)
    }
    })

module.exports = mainRouter;