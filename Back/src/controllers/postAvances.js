const {ofertas,entrevistas} = require("../../configs/DB_connection");


const postAvances= async (req,res) => {
    const {type} = req.query;
    const {data} = req.body;

    try{
    if (type === "Entrevista"){
        const newEntrevista = entrevistas.create({feedback : data.text})
        res.status(200).send("agregada nueva Entrevista", newEntrevista)
    }


}
    catch(error){
        console.log("error",error.message)
    return error
    }
}

module.exports = postAvances; 