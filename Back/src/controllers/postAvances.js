const {ofertas,avances} = require("../../configs/DB_connection");


const postAvances= async (req,res) => {
    const {type} = req.query;
    const {data} = req.body;
    const {id} = req.query


    try{
    if (type === "Entrevista"){
        const newEntrevista = avances.create({feedback : "aqui irá data.text", tipo : type, idOferta: id})
        
        res.status(200).send(newEntrevista)
    }
    // if (type === )


}
    catch(error){
        console.log("error",error.message)
    return error
    }
}

module.exports = postAvances; 