require('dotenv').config();
const { Sequelize, Op, BelongsTo } = require('sequelize');
const modelofertas = require ("../src/models/ofertas")
const modelentrevistas = require ("../src/models/entrevistas")
const modeloidiomas = require ("../src/models/idiomas")
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
modelentrevistas(sequelize)
modeloidiomas(sequelize)

const {entrevistas, ofertas,idiomas} = sequelize.models;

// Acá van las relaciones: 

ofertas.belongsToMany(entrevistas, { through: "ofertasXEntrevistas", unique: false });
entrevistas.belongsToMany(ofertas, { through: "ofertasXEntrevistas", unique: false });

ofertas.belongsToMany(idiomas, { through: "ofertasXIdiomas", unique: false });
idiomas.belongsToMany(ofertas, { through: "ofertasXIdiomas", unique: false });


// tblReviews.belongsTo(tblCourses, {
//    foreignKey: "PK_Course"
// });

// tblCourses.hasMany(tblReviews, {
//    foreignKey: 'PK_Course'
// });


module.exports = {
   ...sequelize.models,
   sequelize,
   Op
}; 
