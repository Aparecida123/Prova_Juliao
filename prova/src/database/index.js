const Sequelize = require("sequelize");

const databaseConfig = require("../config/database.js");

const Products = require("../model/Products");

const connection = new Sequelize(databaseConfig);

Products.init(connection);

module.exports = connection;