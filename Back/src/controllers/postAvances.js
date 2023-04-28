const {ofertas} = require("../../configs/DB_connection");


const postAvances= async (req,res) => {
    const {type} = req.query;
    try{
 
            console.log(type)
           

}
    catch(error){
        console.log("error",error.message)
    return error
    }
}

module.exports = postAvances; 