const { DataTypes } = require('sequelize'); 

module.exports = sequelize => {
    sequelize.define("ofertas", {
        titulo: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        empresa: {
            type: DataTypes.STRING,
            allowNull: true
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        active : {
            type: DataTypes.BOOLEAN,   
            defaultValue : true, 
        },
        linkOferta : {
            type: DataTypes.STRING,
            allowNull:true
        },
        fechaPresentacion: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull:true
        },
        experiencia: {
            type: DataTypes.ENUM(
                "Menos de 1 año",
                "Entre 1 y 2 años",
                "Entre 2 y 5 años",
                "Más de 5 años"
            )
        },
        postulacion: {
            type: DataTypes.ENUM(
                "Espontanea",
                "Regular"
            )
        },
        pais:{
            type: DataTypes.STRING
        },
        stack: {
          type: DataTypes.ENUM(
                "Backend",
                "Frontend",    // en el form agregar: Agregar nuevo stack, y agregarlo, buscar como, igual que en idiomas. 
                "Fullstack"
            )
        },
        tecnologias: 
        {
            type: DataTypes.ARRAY(DataTypes.STRING),  // la logica dirá que en el form puedas escoger varias de las tecnologias disponibles, y una opcion de crear nueva tecnologia para agregar. 
            allowNull: true 
        }
        
    },
        { timestamps: false }
    );
};