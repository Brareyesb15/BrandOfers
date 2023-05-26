const {ofertas,avances} = require("../../configs/DB_connection");


const getPost = async (req,res) => {
    const { id } = req.params;

  try {
    if (id === "1") {
      const oferta = await ofertas.findAll({
        attributes: ["postulacion"],
      });
      const result = oferta.map((oferta) => oferta.postulacion);
      return res.status(200).send(result);
    }
    if (id === "2") {
      const oferta = await ofertas.findAll({
        attributes: ["postulacion"],
        include: [
          {
            model: avances,
            required: true,
          },
        ],
      });
      const result = oferta.map((oferta) => oferta.postulacion);
      return res.status(200).send(result);
    }
    if (id === "3") {
      const oferta = await ofertas.findAll({
        attributes: ["postulacion"],
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
      const result = oferta.map((oferta) => oferta.postulacion);
      return res.status(200).send(result);
    }
    return res.status(400).send({error: "Invalid ID"});
  } catch (error) {
    return res.status(400).send({error: error.message})
  }
};

module.exports = getPost; 