const {ofertas} = require("../../configs/DB_connection");


const putActivate = async (req,res) => {
    let {id} = req.params
    console.log("entreeee", id)
    try{
        
    
  return res.status(200).send(result)
    
}
    catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = putActivate; 