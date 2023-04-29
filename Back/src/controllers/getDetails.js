const {ofertas,avances} = require("../../configs/DB_connection");


const getDetails = async (req,res) => {
    let {opcion} = req.params
try{
    
    const oferta = await ofertas.findByPk(opcion, {
        include: avances, // incluir la tabla "avances"
      });

  return res.status(200).send(oferta)
    
}
catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = getDetails; 