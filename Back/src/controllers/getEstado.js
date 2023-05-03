

const {ofertas} = require("../../configs/DB_connection");


const getEstado = async (req,res) => {
    
    try{
        const oferta = await ofertas.findAll({
            attributes: ["active"]
          })
        const result = oferta.map(oferta => oferta.active);
       
  return res.status(200).send(result)
    
}
    catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = getEstado; 
