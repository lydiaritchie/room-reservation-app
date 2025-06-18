const { DATABASE_URL_DEVELOPMENT } = process.env;
const path = require("path");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: "pg",
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: true,
  },
  // production: {
  //   client: "pg",
  //   connection: DATABASE_URL_PRODUCTION,
  //   migrations: {
  //     directory: path.join(__dirname, "src", "db", "migrations"),
  //   },
  //   seeds: {
  //     directory: path.join(__dirname, "src", "db", "seeds"),
  //   },
  //   debug: !!DEBUG,
  // },
};
