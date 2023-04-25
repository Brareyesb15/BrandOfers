

const {ofertas} = require("../../configs/DB_connection");


const getPaises = async (req,res) => {
    
    try{
        const oferta = await ofertas.findAll({
            attributes: ['pais']
          })
          console.log(oferta)
        const result = oferta.map(oferta => oferta.pais);
       
  return res.status(200).send(result)
    
}
    catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = getPaises; 
