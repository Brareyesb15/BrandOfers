const {ofertas} = require("../../configs/DB_connection");


const getOps = async (req,res,opcion) => {
    
try{
    

  const result = await ofertas.findAll()  

  return res.status(200).send(result)
    
}
catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = {getOps}; 