const {ofertas} = require("../../configs/DB_connection");


const getPost = async (req,res) => {
    try{
        const oferta = await ofertas.findAll({
            attributes: ['postulacion']
          })
        
        const result = oferta.map(oferta => oferta.postulacion);
       
  return res.status(200).send(result)
    
}
    catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = getPost; 