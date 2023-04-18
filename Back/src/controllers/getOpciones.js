const {ofertas} = require("../../configs/DB_connection");


const getOps = async (req,res,opcion) => {
    
try{
    
    const ofertas = await OfertaTrabajo.findAll();
    let ret = []
    
    opcion === "pais" ? ((ret = ofertas.map(o => o.pais)), ret.filter((p, i) => ret.indexOf(p) === i)) : 
    ((ret = ofertas.map(o => o.plataforma)), ret.filter((p, i) => ret.indexOf(p) === i)); 


  return res.status(200).send(ret)
    
}
catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = getOps; 