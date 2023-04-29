const {ofertas,avances} = require("../../configs/DB_connection");


const postAvances= async (req,res) => {
    const {type} = req.query;
    const {data} = req.body;
    const {id} = req.query


    try{
    if (type === "Entrevista"){
        const newEntrevista = avances.create({feedback : data.detalles, titulo: data.titulo, tipo : type, idOferta: id})
        
        res.status(200).send(newEntrevista)
    }
    if (type === "Espontanea"){
        const newEspontanea = avances.create({feedback : "aqui irá data.text", tipo : type, idOferta: id})
    }
    else {
        const newOtro= avances.create({feedback : "aqui irá data.text", tipo : type, idOferta: id})
    }


}
    catch(error){
        console.log("error",error.message)
    return error
    }
}

module.exports = postAvances; 