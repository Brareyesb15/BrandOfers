const {ofertas} = require("../../configs/DB_connection");


const getFechas = async (req,res) => {
    try{
        const oferta = await ofertas.findAll({
            attributes: ['fechaPresentacion']
          })
          console.log(oferta)
        const result = oferta.map(oferta => oferta.fechaPresentacion);
       
  return res.status(200).send(result)
    
}
    catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = getFechas; 