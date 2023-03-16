require('dotenv').config();
const { server, express } = require("./configs/App")
const PORT = process.env.PORT

const {sequelize} = require ("./configs/DB_connection")


sequelize.sync({ force: false }).then(async () => {

})

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
});
