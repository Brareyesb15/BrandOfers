const {ofertas} = require("../../configs/DB_connection");

const getIdioma = async (req, res) => {
  try {
    const oferte = await ofertas.findAll({
      attributes: ['idioma']
    });

    const idiomas = oferte.map(oferta => oferta.idioma.idioma);


    return res.status(200).json(idiomas);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

  
module.exports = getIdioma; 