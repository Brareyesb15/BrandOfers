

const {ofertas} = require("../../configs/DB_connection");


const getPlats = async (req,res) => {
    
    try{
        const oferta = await ofertas.findAll({
            attributes: ["plataforma"]
          })
        const result = oferta.map(oferta => oferta.plataforma);
       
  return res.status(200).send(result)
    
}
    catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = getPlats; 
