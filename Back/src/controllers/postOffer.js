const {ofertas} = require("../../configs/DB_connection");


const postOffer = async (oferta) => {
  
    try{
  const result = await ofertas.create({
    titulo: oferta.titulo,
    empresa: oferta.empresa,
    descripcion : oferta.descripcion,
    tecnologias: oferta.tecnologias,
    linkOferta : oferta.linkOferta,
    stack: oferta.stack,
    experiencia: oferta.experiencia,
    pais: oferta.pais,
    postulacion: oferta.postulacion,
    idioma: oferta.idioma,
    plataforma: oferta.plataforma

    }
    )

return result; 

}
    catch(error){
        return res.status(400).send({error: error.message})
    return error
    }
}

module.exports = postOffer; 