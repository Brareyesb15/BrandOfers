const { ofertas, avances } = require("../../configs/DB_connection");

const getTecs = async (req, res) => {

    let resolv = {};

  try {
    
      const oferta1 = await ofertas.findAll({
        attributes: ["tecnologias"],
      });
      resolv.uno = oferta1.map((oferta) => oferta.tecnologias);
      
      const oferta2 = await ofertas.findAll({
        attributes: ["tecnologias"],
        include: [
          {
            model: avances,
            required: true,
          },
        ],
      });
     resolv.dos = oferta2.map((oferta) => oferta.tecnologias);
    
      const oferta3 = await ofertas.findAll({
        attributes: ["tecnologias"],
        include: [
          {
            model: avances,
            required: false,
          },
        ],
        where: {
          "$avances.id$": null,
        },
      });
      resolv.tres = oferta3.map((oferta) => oferta.tecnologias);
     
      return res.status(400).send(resolv)
   
  } catch (error) {
    return res.status(400).send({error: error.message})
  }
};
module.exports = getTecs; 