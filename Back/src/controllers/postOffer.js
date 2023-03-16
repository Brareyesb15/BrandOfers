const {ofertas} = require("../../configs/DB_connection");


const postOffer = async (oferta) => {
    console.log("en post offer", oferta)
    try{
  const result = await ofertas.create({
    titulo: oferta.titulo,
    empresa: oferta.empresa,
    descripcion : oferta.descripcion,
    tecnologias: oferta.tecnologias,
    linkOferta : oferta.linkOferta,
    stack: oferta.stack,
    ingles: oferta.ingles,
    experiencia: oferta.experiencia,
    pais: oferta.pais

    }
    )
console.log(result)
return result; 

}
    catch(error){
        console.log("error",error.message)
    return error
    }
}

module.exports = postOffer; 