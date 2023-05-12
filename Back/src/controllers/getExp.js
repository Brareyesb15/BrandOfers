const {ofertas,avances} = require("../../configs/DB_connection");


const getExp = async (req,res) => {
    const { id } = req.params;

  try {
    if (id === "1") {
      const oferta = await ofertas.findAll({
        attributes: ["experiencia"],
      });
      const result = oferta.map((oferta) => oferta.experiencia);
      return res.status(200).send(result);
    }
    if (id === "2") {
      const oferta = await ofertas.findAll({
        attributes: ["experiencia"],
        include: [
          {
            model: avances,
            required: true,
          },
        ],
      });
      const result = oferta.map((oferta) => oferta.experiencia);
      return res.status(200).send(result);
    }
    if (id === "3") {
      const oferta = await ofertas.findAll({
        attributes: ["texperiencia"],
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
      const result = oferta.map((oferta) => oferta.experiencia);
      return res.status(200).send(result);
    }
    return res.status(400).send("Invalid ID");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = getExp; 