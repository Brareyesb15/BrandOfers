require('dotenv').config();
const { server, express } = require("./configs/App")
const postTecs = require ("./src/controllers/postTecs")
const PORT = process.env.PORT

const {sequelize} = require ("./configs/DB_connection")


sequelize.sync({ force: true }).then(async () => {


})

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
});
