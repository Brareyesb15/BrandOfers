require('dotenv').config();
const { Sequelize, Op, BelongsTo } = require('sequelize');
const modelofertas = require ("../src/models/ofertas")
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

const {} = sequelize.models;

// Acá van las relaciones: 

// tblCourses.belongsToMany(tblCategories, { through: "tblCatXCourses", unique: false });
// tblCategories.belongsToMany(tblCourses, { through: "tblCatXCourses", unique: false });


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
