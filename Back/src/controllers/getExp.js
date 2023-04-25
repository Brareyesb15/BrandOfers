const {ofertas} = require("../../configs/DB_connection");


const getExp = async (req,res) => {
    try{
        const oferta = await ofertas.findAll({
            attributes: ['experiencia']
          })
          console.log(oferta)
        const result = oferta.map(oferta => oferta.experiencia);
       
  return res.status(200).send(result)
    
}
    catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = getExp; 