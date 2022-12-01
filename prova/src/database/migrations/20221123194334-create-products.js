'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      created: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },
  async down (queryInterface, Sequelize) {}
};
