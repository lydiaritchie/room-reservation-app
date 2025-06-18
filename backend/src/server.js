const { PORT = 5001 } = process.env;

const app = require("./app");
const knex = require("./db/connection");


app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}!`);
  console.log(`Database: ${knex.client.config.connection.database}`);
});