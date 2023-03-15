const { DataTypes } = require('sequelize'); 

module.exports = sequelize => {
    sequelize.define("ofertas", {
        empresa: {
            type: DataTypes.STRING,
            allowNull: true
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        tecnologias:{
            type: DataTypes.ARRAY(DataTypes.STRING), //
            allowNull: true
        },
        stack: {
            type: DataTypes.STRING,
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
            defaultValue: DataTypes.NOW
        }
        
    },
        { timestamps: false }
    );
};