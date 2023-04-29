require('dotenv').config();
const { Sequelize, Op, BelongsTo } = require('sequelize');
const modelofertas = require ("../src/models/ofertas")
const modelavances = require ("../src/models/avances")
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY, DB_DB } = process.env;


// postgres://DB_USER:DB_PASSWORD@DB_HOST/NOMBREBASEDEDATOS ESTRUCTURA DATOS SEQUELIZE

 const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DB}`,
   // URL
   { 
   logging: false, 
   native: false 
}
);

// const sequelize = new Sequelize(DB_DEPLOY,
//    {
//       logging: false,
//       native: false
//    }
// );

//Acá irán las funciones de los modelos. ej: modelStudents(sequelize)

modelofertas(sequelize)
modelavances(sequelize)

const {avances, ofertas} = sequelize.models;

// Acá van las relaciones: 


avances.belongsTo(ofertas, {
   foreignKey: "idOferta"
});

ofertas.hasMany(avances, { foreignKey: 'idOferta' });

// tblCourses.hasMany(tblReviews, {
//    foreignKey: 'PK_Course'
// });


module.exports = {
   ...sequelize.models,
   sequelize,
   Op
}; 
