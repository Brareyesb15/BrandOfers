const { DataTypes } = require('sequelize'); 

module.exports = sequelize => {
    sequelize.define("entrevistas", {
        fecha: {
            type: DataTypes.DATE, // (YYYY-MM-DD HH:mm:ss).
            allowNull: true 
        },
        feedback:{
            type: DataTypes.TEXT,
            allowNull:true
        }
        
    },
        { timestamps: false }
    );
};