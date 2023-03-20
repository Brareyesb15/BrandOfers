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
        console.log("error",error.message)
    return error
    }
}

module.exports = postTecs; 