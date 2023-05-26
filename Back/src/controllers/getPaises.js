
const {ofertas,avances} = require("../../configs/DB_connection");


const getPaises = async (req,res) => { 
  let resolv = {};

  try {
    
      const oferta1 = await ofertas.findAll({
        attributes: ["pais"],
      });
      resolv.uno = oferta1.map((oferta) => oferta.pais);
      
      const oferta2 = await ofertas.findAll({
        attributes: ["pais"],
        include: [
          {
            model: avances,
            required: true,
          },
        ],
      });
     resolv.dos = oferta2.map((oferta) => oferta.pais);
    
      const oferta3 = await ofertas.findAll({
        attributes: ["pais"],
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
      resolv.tres = oferta3.map((oferta) => oferta.pais);
     
      return res.status(200).send(resolv)
} catch (error) {
  return res.status(400).send({error: error.message})
}
}

module.exports = getPaises; 
