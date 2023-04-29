const {ofertas,avances} = require("../../configs/DB_connection");


const postAvances= async (req,res) => {
    const {type} = req.query;
    const data = req.body;
    const {id} = req.query
  console.log("entramos,", data.titulo, data.detalles,type,id)

    try{
        const newEntrevista = avances.create({feedback : data.detalles, titulo: data.titulo, tipo : type, idOferta: id})
        
        res.status(200).send(newEntrevista)
    }



    catch(error){
        console.log("error",error.message)
    return error
    }
}

module.exports = postAvances; 