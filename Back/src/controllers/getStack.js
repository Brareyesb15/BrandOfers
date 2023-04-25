const {ofertas} = require("../../configs/DB_connection");


const getStack = async (req,res) => {
    try{
        const oferta = await ofertas.findAll({
            attributes: ['stack']
          })
        
        const result = oferta.map(oferta => oferta.stack);
       
  return res.status(200).send(result)
    
}
    catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = getStack; 