const {tecnologias} = require("../../configs/DB_connection");
const tecs = require("../../utils/tecs");


const postTecs = async () => {
    console.log("en post tec", )
    try{
        for (const tec of tecs) {
            await tecnologias.create({nombre: tec}
            )
        }
       

}
    catch(error){
        return res.status(400).send({error: error.message})
    return error
    }
}

module.exports = postTecs; 