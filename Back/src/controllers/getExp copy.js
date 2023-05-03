const {ofertas} = require("../../configs/DB_connection");

const getIdioma = async (req, res) => {
    try {
      const oferta = await ofertas.findAll({
        attributes: ['idioma']
      });
      
      const result = oferta.map(oferta => oferta.idioma);
  
      return res.status(200).send(result);
    } catch(error) {
      return res.status(400).send(error.message);
    }
  };
module.exports = getIdioma; 