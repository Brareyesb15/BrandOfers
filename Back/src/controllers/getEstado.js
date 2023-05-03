

const {ofertas} = require("../../configs/DB_connection");


const getEstado = async (req,res) => {
    
    try{
        const oferta = await ofertas.findAll({
            attributes: ['estado']
          })
        const result = oferta.map(oferta => oferta.estado);
       
  return res.status(200).send(result)
    
}
    catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = getEstado; 
