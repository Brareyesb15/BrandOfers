const {ofertas} = require("../../configs/DB_connection");


const putActivate = async (req,res) => {
    let {id} = req.params
    console.log("entreeee", id)
    try{
        const oferta = await ofertas.findOne({ where: { id } }); 
    
        const newActivate = !oferta.active;
     
        await oferta.update({ active: newActivate });
        const result = await ofertas.findAll()
    
  return res.status(200).send(result)
    
}
    catch(error){
        return res.status(400).send({error: error.message})
    }
}

module.exports = putActivate; 