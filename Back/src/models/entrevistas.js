const { DataTypes } = require('sequelize'); 

module.exports = sequelize => {
    sequelize.define("entrevistas", {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull : false,
            autoIncrement : true
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