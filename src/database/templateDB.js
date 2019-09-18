"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("survivors", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      latitude: {
        type: Sequelize.DECIMAL(14, 11),
        allowNull: false,
      },
      longitude: {
        type: Sequelize.DECIMAL(14, 11),
        allowNull: false,
      },
      infections: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      infected: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      water: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      ammunition: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      medication: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      food: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      infection_attested_for: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("survivors");
  },
};
