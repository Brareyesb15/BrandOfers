const {ofertas} = require("../../configs/DB_connection");


const getOps = async (req,res) => {
    let {opcion} = req.params
try{
    
    const oferta = await ofertas.findAll();
    let ret = []
    
    opcion === "pais" ? (ret = oferta.map(o => o.pais).filter((p, i, arr) => arr.indexOf(p) === i)) : 
    (ret = oferta.map(o => o.plataforma).filter((p, i, arr) => arr.indexOf(p) === i));


  return res.status(200).send(ret)
    
}
catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = getOps; 