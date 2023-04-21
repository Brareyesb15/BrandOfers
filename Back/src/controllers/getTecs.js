const {ofertas} = require("../../configs/DB_connection");


const getTecs = async (req,res) => {
    
    try{
        const oferta = await ofertas.findAll({
            attributes: ['tecnologias']
          })
        const result = oferta.map(oferta => oferta.tecnologias);

  return res.status(200).send(result)
    
}
    catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = getTecs; 