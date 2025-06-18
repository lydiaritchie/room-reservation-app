const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

module.exports = knex;
