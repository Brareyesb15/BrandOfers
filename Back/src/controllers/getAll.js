const {ofertas} = require("../../configs/DB_connection");


const getAll = async (req,res) => {
    console.log("en get offer", ofertas)
    try{
  const result = await ofertas.findAll()  

  return res.status(200).send(result)
    
}
    catch(error){
        return res.status(400).send({error: error.message})
    }
}

module.exports = getAll; 