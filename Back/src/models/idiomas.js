const { DataTypes } = require('sequelize'); 

module.exports = sequelize => {
    sequelize.define("idiomas", {
        idio: {
            type: DataTypes.ENUM(
                "Español",
                "Inglés",
                "Coreano",
                "Aleman") // en el form poner : agregar un nuevo idioma. Lo que tiene que hacer es crear una nueva opción aquí, buscar como en mi amiga.
        },
        nivel:{
            type: DataTypes.ENUM(
                        "A2",
                        "A1",
                        "B2",
                        "B1",
                        "C2",
                        "C1",
                        "Nativo"
                    )
        }
        
    },
        { timestamps: false }
    );
};

