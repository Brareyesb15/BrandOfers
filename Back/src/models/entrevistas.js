const { DataTypes } = require('sequelize'); 

module.exports = sequelize => {
    sequelize.define("avances", {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull : false,
            autoIncrement : true
        },
        tipo: {
            type: DataTypes.ENUM(
                "Entrevista",
                "Espontanea",
                "Otro",
            )
        },
        fecha: {
            type: DataTypes.DATE, // (YYYY-MM-DD HH:mm:ss).
            allowNull: true 
        },
        feedback:{
            type: DataTypes.TEXT,
            allowNull:true
        },
        idOferta :{
            type: DataTypes.INTEGER,
            allowNull : false
        }
        
    },
        { timestamps: false }
    );
};