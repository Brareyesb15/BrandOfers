const { DataTypes } = require('sequelize'); 

module.exports = sequelize => {
    sequelize.define("tecnologias", {
        nombre: {
          type:  DataTypes.STRING
        }
    },
        { timestamps: false }
    );
};

