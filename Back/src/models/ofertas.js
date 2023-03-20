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
        }
        
    },
        { timestamps: false }
    );
};